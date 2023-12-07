import { Op } from 'sequelize';
import Fasel from '../../models/forms/Fasel.js';
import FaselDetails from '../../models/forms/FaselDetails.js';

import { default as jMoment, default as moment } from "moment-jalaali";
import logger from '../../models/logModel.js';

// //! GET All FaselDetail
export const getAllFaselDetail = async (req, res) => {
  try {
    const response = await FaselDetails.findAll({
      order: [['id', 'DESC']],
      include: [Fasel]
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! Search FaselDetail
export const searchFaselDetail = async (req, res) => {

  const shamsiDate = req.params.search; // Assuming the Shamsi date is passed as a parameter
  const gregorianDate = jMoment(shamsiDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');

  try {
    const response = await FaselDetails.findAll({
      include: [Fasel],
      where: {
        [Op.or]: [
          { reference: req.params.search },
          { faselId: req.params.search },
          { private_num: req.params.search },
          { after_pay: req.params.search },
          { befor_pay: req.params.search },
          { date: gregorianDate },
        ],
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! get Fasel Details
export const getFaselDetail = async (req, res) => {
  try {
    const response = await FaselDetails.findAll({
      where: { faselId: req.params.id },
      include: [Fasel]
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! get Single Fasel
export const getSingleFaselDetail = async (req, res) => {
  try {
    const response = await FaselDetails.findAll({
      include: [Fasel],
      where: { id: req.params.id },
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}



import Logs from "../../models/logModel.js";

export const logEvent = async (userId, action, tableName, recordId = null) => {
  try {
    await Logs.create({ userId: userId, action, table_name: tableName, recordId: recordId });
  } catch (error) {
    console.error('Error logging event:', error);
  }
}

//! Create Fasel
export const createFaselDetail = async (req, res) => {

  const userId = req.session.userId
  const userName = req.session.username;

  const faselId = req.body.faselId;
  const desc = req.body.desc;
  const date = req.body.date;
  const reference = req.body.reference;
  const private_num = req.body.private_num;
  const refinement = req.body.refinement;
  let after_pay = req.body.after_pay;
  let befor_pay = req.body.befor_pay;
  const previous_considered = req.body.previous_considered;
  const commitment = req.body.commitment;
  const income = req.body.income;
  const transfer = req.body.transfer;
  const commitment_transfer = req.body.commitment_transfer;

  if (moment(req.body.date).format("jYYYY-MM-DD") > moment().format("jYYYY-MM-DD")) {
    res.json({ error: "تاریخ نا معتبر است" })
  } else {

    if (after_pay || befor_pay > 0) {

      const fasel = await Fasel.findOne({ where: { id: faselId } });

      if (befor_pay === "") {
        befor_pay = 0;
      }
      if (after_pay === "") {
        after_pay = 0;
      }

      if (fasel.amount >= (parseFloat(befor_pay) + parseFloat(after_pay))) {

        try {
          const createdRecord = await FaselDetails.create({
            faselId: faselId,
            desc: desc,
            date: date,
            reference: reference,
            private_num: private_num,
            refinement: refinement,
            after_pay: after_pay,
            befor_pay: befor_pay,
            previous_considered: previous_considered,
            commitment: commitment,
            income: income,
            transfer: transfer,
            commitment_transfer: commitment_transfer,
          })
          res.json(createdRecord);

          //! Log
          // await logEvent(userId, 'create', 'faselDetail', createdRecord.id);
          // // Respond with the created record and a success message as a JSON response
          // res.json({ success: true, record: createdRecord });
          // // !
          const logMessage = `جزئیات فصل اضافه شد..:\nمعلومات اضافه شده: ${JSON.stringify(createdRecord)}\nمدیر مسِوًول:${userName}`;
          logger('FaselCreatedLogFile').info(logMessage);
        } catch (error) {
          console.log(error)
        }

        fasel.update({ amount: fasel.amount - (parseFloat(befor_pay) + parseFloat(after_pay)) })

      } else {
        res.json({ error: "مقدار پرداخت بیشتر از مقدار بودجه است." })
      }
    }

  }
}



//! Paid 

export const paid = async (req, res) => {
  const result = await FaselDetails.findOne({ where: { id: req.params.id } });

  const refinement = req.body.refinement;
  const after_pay = req.body.after_pay;
  const befor_pay = req.body.befor_pay;
  const previous_considered = req.body.previous_considered;
  const commitment = req.body.commitment;
  const income = req.body.income;
  const transfer = req.body.transfer;
  const commitment_transfer = req.body.commitment_transfer;

  try {
    const previousBeforPay = parseFloat(result.befor_pay);
    const previousAfterPay = parseFloat(result.after_pay);

    // Calculate the new values by summing the previous and current values
    const updatedBeforPay = previousBeforPay + parseFloat(befor_pay);
    const updatedAfterPay = previousAfterPay + parseFloat(after_pay);

    await result.update({
      refinement: refinement,
      after_pay: updatedAfterPay,
      previous_considered: previous_considered,
      commitment: commitment,
      income: income,
      transfer: transfer,
      commitment_transfer: commitment_transfer,
    }, { where: { id: req.params.id } });
  } catch (error) {
    console.log(error);
  }
}



//! Update 

export const updateFaselDetail = async (req, res) => {


  const userName = req.session.username;

  const faselId = req.body.faselId;
  const desc = req.body.desc;
  const date = req.body.date;
  const reference = req.body.reference;
  const private_num = req.body.private_num;
  const refinement = req.body.refinement;
  const after_pay = req.body.after_pay;
  const befor_pay = req.body.befor_pay;
  const previous_considered = req.body.previous_considered;
  const commitment = req.body.commitment;
  const income = req.body.income;
  const transfer = req.body.transfer;
  const commitment_transfer = req.body.commitment_transfer;

  if (parseFloat(befor_pay) + parseFloat(after_pay) >= 0) {

    const fasel = await Fasel.findOne({ where: { id: faselId } });

    if (fasel.amount >= parseFloat(after_pay) + parseFloat(befor_pay)) {

      const result = await FaselDetails.findOne({ where: { id: req.params.id } });

      const previes_after_pay = parseFloat(result.after_pay);
      const previes_befor_pay = parseFloat(result.befor_pay);
      const fasel_amount = parseFloat(fasel.amount);
      const new_after_pay = parseFloat(after_pay);
      const new_befor_pay = parseFloat(befor_pay);

      fasel.update({ amount: fasel_amount - (new_after_pay + new_befor_pay) + (previes_after_pay + previes_befor_pay) });

      try {

        const previousData = { ...result.dataValues };

        const data = await result.update({
          faselId: faselId,
          desc: desc,
          date: date,
          reference: reference,
          private_num: private_num,
          refinement: refinement,
          after_pay: after_pay,
          befor_pay: befor_pay,
          previous_considered: previous_considered,
          commitment: commitment,
          income: income,
          transfer: transfer,
          commitment_transfer: commitment_transfer,
        })
        res.json(data);
        // !Log
        const logMessage = `جزئیات فصل ویرایش شد:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('FaselDetailUpdatedLogFile').info(logMessage);

      } catch (error) {
        console.log(error)
      }

    } else {
      res.json({ error: "مقدار تخصیص بیشتر از مقدار بودجه است." })
    }
  }









  // try {
  //   const data = await result.update({
  //     faselId: faselId,
  //     desc: desc,
  //     date: date,
  //     reference: reference,
  //     private_num: private_num,
  //     refinement: refinement,
  //     after_pay: after_pay,
  //     befor_pay: befor_pay,
  //     previous_considered: previous_considered,
  //     commitment: commitment,
  //     income: income,
  //     transfer: transfer,
  //     commitment_transfer: commitment_transfer,
  //   })
  //   res.json(data);
  // } catch (error) {
  //   console.log(error)
  // }
}