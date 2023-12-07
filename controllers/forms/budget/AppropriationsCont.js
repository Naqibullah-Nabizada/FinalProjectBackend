import { Op } from "sequelize";
import Appropriations from "../../../models/forms/budget/Appropriations.js";

import moment from "jalali-moment";

//! Get all Appropriations
export const getAllAppropriations = async (req, res) => {
  try {
    const response = await Appropriations.findAll(
      {
        // where: { year: moment().format('jYYYY') },
        order: [['year', 'Desc']]
      }
    );
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}



//! Get all Appropriations
export const getAppropriationsYears = async (req, res) => {
  try {
    const response = await Appropriations.findAll({
      where: { year: moment().format('jYYYY') },
      group: ['year']
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! get Single Appropriation
export const getSingleAppropriation = async (req, res) => {
  try {
    const response = await Appropriations.findAll({
      where: { id: req.params.id },
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Search Appropriations
export const searchAppropriation = async (req, res) => {
  try {
    const response = await Appropriations.findAll({
      where: {
        [Op.or]: [
          { year: req.params.search },
          { code: req.params.search },
          { dari_name: req.params.search },
          { pashto_name: req.params.search },
          { eng_name: req.params.search },
          { main_amount: req.params.search },
          { amount: req.params.search },
        ],
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Create Appropriation
// export const createAppropriation = async (req, res) => {

//   const year = req.body.year;
//   const code = req.body.code;
//   const dari_name = req.body.dari_name;
//   const pashto_name = req.body.pashto_name;
//   const eng_name = req.body.eng_name;
//   const main_amount = req.body.amount;
//   const amount = req.body.amount;

//   try {
//     const data = await Appropriations.create({
//       year: year,
//       code: code,
//       dari_name: dari_name,
//       pashto_name: pashto_name,
//       eng_name: eng_name,
//       main_amount: main_amount,
//       amount: amount
//     })
//     res.json(data);
//   } catch (error) {
//     console.log(error)
//   }
// }

export const createAppropriation = async (req, res) => {

  const userId = req.session.userId
  const userName = req.session.username

  // Extract the field values from the request body
  const year = req.body.year;
  const code = req.body.code;
  const dari_name = req.body.dari_name;
  const pashto_name = req.body.pashto_name;
  const eng_name = req.body.eng_name;
  const main_amount = req.body.amount;
  const amount = req.body.amount;

  try {
    // Create a new appropriation record using the Appropriations model
    const createdRecord = await Appropriations.create({
      year: year,
      code: code,
      dari_name: dari_name,
      pashto_name: pashto_name,
      eng_name: eng_name,
      main_amount: main_amount,
      amount: amount
    });

    // Log the event
    // await logEvent(userId, 'create', 'appropriations', createdRecord.id);
    // // Respond with the created record and a success message as a JSON response
    // res.json({ success: true, record: createdRecord });

    res.json(createdRecord);
    //! Log

    const logMessage = `بودجه اضافه شد..:\nمعلومات اضافه شده: ${JSON.stringify(createdRecord)}\nمدیر مسِوًول:${userName}`;
    logger('BudgetCreatedLogFile').info(logMessage);
  } catch (error) {
    // If an error occurs, log the error to the console and send an error response
    console.log(error);
    res.status(500).json({ error: 'Failed to create appropriation' });
  }
};


//! Update 

// export const updateAppropriation = async (req, res) => {

//   const result = await Appropriations.findOne({ where: { id: req.params.id } });

//   const year = req.body.year;
//   const code = req.body.code;
//   const dari_name = req.body.dari_name;
//   const pashto_name = req.body.pashto_name;
//   const eng_name = req.body.eng_name;
//   const main_amount = req.body.amount;
//   const amount = req.body.amount;

//   try {
//     const data = await result.update({
//       year: year,
//       code: code,
//       dari_name: dari_name,
//       pashto_name: pashto_name,
//       eng_name: eng_name,
//       main_amount: main_amount,
//       amount: amount
//     })
//     res.json(data);
//   } catch (error) {
//     console.log(error)
//   }
// }



import { default as Logs, default as logger } from "../../../models/logModel.js";

export const logEvent = async (userId, action, tableName, recordId = null) => {
  try {
    await Logs.create({ userId: userId, action, table_name: tableName, recordId: recordId });
  } catch (error) {
    console.error('Error logging event:', error);
  }
}


export const updateAppropriation = async (req, res) => {

  const appropriationId = req.params.id;
  const userId = req.session.userId
  const userName = req.session.username

  try {

    const result = await Appropriations.findOne({ where: { id: appropriationId } });

    const previousData = { ...result.dataValues };

    if (!result) {
      return res.status(404).json({ error: 'Appropriation not found' });
    }

    const year = req.body.year;
    const code = req.body.code;
    const dari_name = req.body.dari_name;
    const pashto_name = req.body.pashto_name;
    const eng_name = req.body.eng_name;
    const main_amount = req.body.amount;
    const amount = req.body.amount;

    const previousValues = { // Store previous values for logging
      year: result.year,
      code: result.code,
      dari_name: result.dari_name,
      pashto_name: result.pashto_name,
      eng_name: result.eng_name,
      main_amount: result.main_amount,
      amount: result.amount,
    };

    const updatedData = {
      year: year,
      code: code,
      dari_name: dari_name,
      pashto_name: pashto_name,
      eng_name: eng_name,
      main_amount: main_amount,
      amount: amount,
    };

    await result.update(updatedData);

    const logMessage = `بودجه ویرایش شد:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(updatedData)}\nمدیر مسِوًول:${userName}`
    logger('BudgetUpdatedLogFile').info(logMessage);

    // Log the event
    // await logEvent(userId, 'update', 'appropriations', appropriationId);

    res.json(updatedData);
  } catch (error) {
    console.error('Error updating appropriation:', error);
    res.status(500).json({ error: 'Failed to update appropriation' });
  }
};