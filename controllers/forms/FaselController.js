import moment from 'jalali-moment';
import { Op } from 'sequelize';
import Fasel from '../../models/forms/Fasel.js';
import Appropriations from '../../models/forms/budget/Appropriations.js';

//! Get Fasel
export const getFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      where: { year: moment().format("jYYYY") },
      include: [Appropriations]
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! get Single Fasel
export const getSingleFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      where: { id: req.params.id },
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Search Fase
export const searchFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      include: [Appropriations],
      where: {
        [Op.or]: [
          { appropriationId: req.params.search },
          { year: req.params.search },
          { code: req.params.search },
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


//! Create Fasel
// export const createFasel = async (req, res) => {

//   const appropriationId = req.body.appropriationId;
//   const year = req.body.year;
//   const code = req.body.code;
//   const desc = req.body.desc;
//   const main_amount = req.body.amount;
//   const amount = req.body.amount;

//   if (amount > 0) {
//     const appro = await Appropriations.findOne({ where: { id: appropriationId } });
//     if (appro.amount >= amount) {

//       try {
//         const data = await Fasel.create({
//           appropriationId: appropriationId,
//           year: year,
//           code: code,
//           desc: desc,
//           main_amount: main_amount,
//           amount: amount,
//         })
//         res.json(data);
//       } catch (error) {
//         console.log(error)
//       }

//       appro.update({ amount: appro.amount - amount });
//     } else {
//       res.json({ error: "مقدار تخصیص بیشتر از مقدار بودجه است." })
//     }
//   }

// }

import { default as Logs, default as logger } from '../../models/logModel.js';

export const logEvent = async (userId, action, tableName, recordId = null) => {
  try {
    await Logs.create({ userId: userId, action, table_name: tableName, recordId: recordId });
  } catch (error) {
    console.error('Error logging event:', error);
  }
}

export const createFasel = async (req, res) => {

  const userId = req.session.userId
  const userName = req.session.username

  // Extract the field values from the request body
  const appropriationId = req.body.appropriationId;
  const year = req.body.year;
  const code = req.body.code;
  const desc = req.body.desc;
  const main_amount = req.body.amount;
  const amount = req.body.amount;


  if (amount > 0) {
    const appro = await Appropriations.findOne({ where: { id: appropriationId } });
    if (appro.amount >= amount) {

      try {
        const createdRecord = await Fasel.create({
          appropriationId: appropriationId,
          year: year,
          code: code,
          desc: desc,
          main_amount: main_amount,
          amount: amount,
        })
        res.json(createdRecord);

        // !Log 

        // await logEvent(userId, 'create', 'fasel', createdRecord.id);
        // // Respond with the created record and a success message as a JSON response
        // res.json({ success: true, record: createdRecord });
        // //!
        const logMessage = `فصل اضافه شد..:\nمعلومات اضافه شده: ${JSON.stringify(createdRecord)}\nمدیر مسِوًول:${userName}`;
        logger('FaselCreatedLogFile').info(logMessage);

      } catch (error) {
        console.log(error)
      }

      appro.update({ amount: appro.amount - amount });
    } else {
      res.json({ error: "مقدار تخصیص بیشتر از مقدار بودجه است." })
    }
  }
};


//! Update 

export const updateFasel = async (req, res) => {

  const faselId = req.params.id;
  const userId = req.session.userId
  const userName = req.session.username

  const appropriationId = req.body.appropriationId;
  const year = req.body.year;
  const code = req.body.code;
  const desc = req.body.desc;
  const main_amount = req.body.amount;
  const amount = req.body.amount;

  if (amount > 0) {

    const appro = await Appropriations.findOne({ where: { id: appropriationId } });

    if (appro.amount >= amount) {

      const result = await Fasel.findOne({ where: { id: req.params.id } });

      const previes_budget = parseFloat(result.amount);
      const appro_amount = parseFloat(appro.amount);
      const budget = parseFloat(amount);

      appro.update({ amount: appro_amount - budget + previes_budget });

      try {
        const previousData = { ...result.dataValues };

        const data = await result.update({
          appropriationId: appropriationId,
          year: year,
          code: code,
          desc: desc,
          main_amount: main_amount,
          amount: amount,
        })
        res.json(data);
        // ! Log
        const logMessage = `فصل ویرایش شد:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('FaselUpdatedLogFile').info(logMessage);
        // !
        // await logEvent(userId, 'update', 'Fasel', faselId);
        // res.json({ previousData, data });
      } catch (error) {
        console.log(error)
      }
    } else {
      res.json({ error: "مقدار تخصیص بیشتر از مقدار بودجه است." })
    }
  }

}





export const updateAppropriation = async (req, res) => {

  const appropriationId = req.params.id;
  const userId = req.session.userId

  try {
    const result = await Appropriations.findOne({ where: { id: appropriationId } });

    if (!result) {
      return res.status(404).json({ error: 'fasels not found' });
    }

    const appropriationId = req.body.appropriationId;
    const year = req.body.year;
    const code = req.body.code;
    const desc = req.body.desc;
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

    if (amount > 0) {

      const appro = await Appropriations.findOne({ where: { id: appropriationId } });

      if (appro.amount >= amount) {

        const result = await Fasel.findOne({ where: { id: req.params.id } });

        const previes_budget = parseFloat(result.amount);
        const appro_amount = parseFloat(appro.amount);
        const budget = parseFloat(amount);

        appro.update({ amount: appro_amount - budget + previes_budget });

        try {
          const updatedData = await result.update({
            appropriationId: appropriationId,
            year: year,
            code: code,
            desc: desc,
            main_amount: main_amount,
            amount: amount,
          })
          res.json(data);

          await result.update(updatedData);

          // Log the event
          await logEvent(userId, 'update', 'fasels', appropriationId);

          res.json({ previousValues, updatedData });

        } catch (error) {
          console.log(error)
        }

      } else {
        res.json({ error: "مقدار تخصیص بیشتر از مقدار بودجه است." })
      }
    }
  } catch (error) {
    console.error('Error updating appropriation:', error);
    res.status(500).json({ error: 'Failed to update appropriation' });
  }
};