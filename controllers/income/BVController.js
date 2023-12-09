import { Op } from "sequelize";

import moment from "jalali-moment";
import BV from "../../models/income/BV.js";
import logger from "../../models/logModel.js";

//! Get All BVs
export const getBV = async (req, res) => {
  try {
    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];

    const response = await BV.findAll({
      where: {
        type: query
      }, order: [['year', 'DESC']]
    });
    res.json(response);
  } catch (error) {
    console.log(error.message)
  }
}


//! get single IdCard
export const getSingleBV = async (req, res) => {
  try {
    const response = await BV.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Get Search BV
export const searchBV = async (req, res) => {
  try {

    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];
    let result = query.split(":")[0].match(/[a-zA-Z]+/)[0];

    const response = await BV.findAll({
      where: {
        [Op.or]: [
          { name: req.params.search },
          { father_name: req.params.search },
          { reference: req.params.search },
          { year: req.params.search },
          { tariff_num: req.params.search },
          { tariff_date: req.params.search },
          { pendant_num: req.params.search },
          { pendant_date: req.params.search }
        ],
        [Op.and]: [{
          type: result
        }]
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

//! Create BV
export const createBV = async (req, res) => {

  const userName = req.session.username;

  const name = req.body.name;
  const father_name = req.body.father_name;
  const type = req.body.type;
  const amount = req.body.amount;
  const year = req.body.year;
  const reference = req.body.reference;
  const tariff_num = req.body.tariff_num;
  const tariff_date = req.body.tariff_date;

  if (moment(req.body.tariff_date).format("jYYYY-MM-DD") > moment().format("jYYYY-MM-DD")) {
    res.json({ error: "تاریخ تعرفه نا معتبر است" })
  } else {

    try {
      const data = await BV.create({
        name: name,
        father_name: father_name,
        reference: reference,
        type: type,
        amount: amount,
        year: year,
        tariff_num: tariff_num,
        tariff_date: tariff_date,
      })
      res.json(data);

      if (type == "buildings") {
        const logMessage = `عواید کرایه اپارتمان های استادان اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('BuildingsCreatedLogFile').info(logMessage);
      } else {
        const logMessage = `عواید کارت های وسایط نقلیه اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('VehiclesCreatedLogFile').info(logMessage);
      }
    } catch (error) {
      res.json({ error: "نمبر تعرفه قبلا ثبت شده است." })
    }
  }
}

//! Update BV
export const updateBV = async (req, res) => {

  const userName = req.session.username;

  const result = await BV.findOne({ where: { id: req.params.id } });

  const name = req.body.name;
  const father_name = req.body.father_name;
  const type = req.body.type;
  const amount = req.body.amount;
  const year = req.body.year;
  const reference = req.body.reference;
  const tariff_num = req.body.tariff_num;
  const tariff_date = req.body.tariff_date;
  const pendant_num = req.body.pendant_num;
  const pendant_date = req.body.pendant_date;
  const remark = req.body.remark;

  if (moment(req.body.tariff_date).format("jYYYY-MM-DD") > moment().format("jYYYY-MM-DD") ||
    moment(req.body.pendant_date).format("jYYYY-MM-DD") > moment().format("jYYYY-MM-DD")) {
    res.json({ error: "تاریخ تعرفه یا تاریخ آویز نا معتبر است" })
  } else {

    try {

      const previousData = { ...result.dataValues };

      const data = await result.update({
        name: name,
        father_name: father_name,
        reference: reference,
        type: type,
        amount: amount,
        year: year,
        tariff_num: tariff_num,
        tariff_date: tariff_date,
        pendant_num: pendant_num,
        pendant_date: pendant_date,
        remark: remark,
      })
      res.json(data);
      if (type == "buildings") {
        const logMessage = `کرایه اپارتمان های استادان ویرایش شد:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\n\nمدیر مسِوًول:${userName}`
        logger('BuildingsUpdatedLogFile').info(logMessage);
      } else {
        const logMessage = `کرایه کارت های وسایط نقلیه ویرایش شد:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\n\nمدیر مسِوًول:${userName}`
        logger('VehiclesUpdatedLogFile').info(logMessage);
      }
    } catch (error) {
      console.log(error)
    }
  }
}
//! Pendante BV 
export const pendanteBV = async (req, res) => {

  const userName = req.session.username;
  
  const result = await BV.findOne({ where: { id: req.params.id } });

  const pendant_num = req.body.pendant_num;
  const pendant_date = req.body.pendant_date;
  const remark = req.body.remark;

  if (moment(req.body.pendant_date).format("jYYYY-MM-DD") > moment().format("jYYYY-MM-DD")) {
    res.json({ error: "تاریخ آویز نا معتبر است" })
  } else {

    try {
      const data = await result.update({
        pendant_num: pendant_num,
        pendant_date: pendant_date,
        remark: remark,
      }, { where: { id: req.params.id } })
      res.json(data);

      if (result.type == "buildings") {
        const logMessage = `آویز بانکی کرایه اپارتمان های استادان اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('BuildingsPendantedLogFile').info(logMessage);
      } else {
        const logMessage = `آویز بانکی کارت های وسایط نقلیه اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('VehiclesPendantedLogFile').info(logMessage);
      }
    } catch (error) {
      res.json({ error: "نمبر آویز قبلا ثبت شده است." })
    }
  }
}


//! Delete BV
export const deleteBV = async (req, res) => {
  try {
    const data = await BV.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
