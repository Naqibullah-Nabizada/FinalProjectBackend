import { Op } from "sequelize";

import moment from "jalali-moment";
import TwelveSection from "../../models/income/TwelveSection.js";
import logger from "../../models/logModel.js";

//! Get All TwelveSection
export const getTwelveSection = async (req, res) => {
  try {

    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];

    const response = await TwelveSection.findAll({
      where: {
        type: query
      }, order: [['year', 'DESC']]
    });
    res.json(response);
  } catch (error) {
    console.log(error.message)
  }
}

//! Get Search TwelveSection
export const searchTwelveSection = async (req, res) => {
  try {

    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];
    let result = query.split(":")[0].match(/[a-zA-Z]+/)[0];

    const response = await TwelveSection.findAll({
      where: {
        [Op.or]: [
          { name: req.params.search },
          { father_name: req.params.search },
          { maktub_num: req.params.search },
          { reference: req.params.search },
          { year: req.params.search },
          { tariff_num: req.params.search },
          { pendant_num: req.params.search },
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

//! Get Single TwelveSection
export const getSingleTwelveSection = async (req, res) => {
  try {
    const response = await TwelveSection.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Create TwelveSection
export const createTwelveSection = async (req, res) => {

  const userName = req.session.username;

  const type = req.body.type;
  const name = req.body.name;
  const father_name = req.body.father_name;
  const maktub_num = req.body.maktub_num;
  const reference = req.body.reference;
  const year = req.body.year;
  const amount = req.body.amount;
  const desc = req.body.desc;
  const tariff_num = req.body.tariff_num;
  const tariff_date = req.body.tariff_date;

  if (moment(req.body.tariff_date).format("jYYYY-MM-DD") > moment().format("jYYYY-MM-DD")) {
    res.json({ error: "تاریخ تعرفه نا معتبر است" })
  } else {

    try {
      const data = await TwelveSection.create({
        type: type,
        name: name,
        father_name: father_name,
        maktub_num: maktub_num,
        reference: reference,
        year: year,
        amount: amount,
        desc: desc,
        tariff_num: tariff_num,
        tariff_date: tariff_date,
      })
      res.json(data);

      if (type == "bakery") {
        // const logMessage = `پوهنحًی ایجاد شد:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        const logMessage = `عواید کرایه خبازی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('BakeryCreatedLogFile').info(logMessage);

      } else if (type == "hostelBread") {
        const logMessage = `عواید فروش نان قاق لیلیه اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('BreadCreatedLogFile').info(logMessage);

      } else if (type == "paper") {
        const logMessage = `عواید فروش ضایعات کاغذ آمریت نشرات اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('PaperCreatedLogFile').info(logMessage);

      } else if (type == "guestHouse") {
        const logMessage = `عواید کرایه مهمانخانه آمریت خدمات اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('GuestHouseCreatedLogFile').info(logMessage);

      } else if (type == "farmaticProducts") {
        const logMessage = `عواید محصولات تجزیه فارمسوتیکی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('FarmaticProductsCreatedLogFile').info(logMessage);

      } else if (type == "agricultureFarm") {
        const logMessage = `عواید فارم تحقیقاتی پوهنزی زراعت اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('AgricultureFarmCreatedLogFile').info(logMessage);

      } else if (type == "maforms") {
        const logMessage = `عواید فورم های ماستری اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('MAFormsCreatedLogFile').info(logMessage);

      } else if (type == "animalClinic") {
        const logMessage = `عواید کلینیک حیوانی پوهنزی وترنری اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('AnimalClinicCreatedLogFile').info(logMessage);

      } else if (type == "guaranteedRecursive") {
        const logMessage = `عواید تضمین و بازگشتی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('GuaranteedRecursiveCreatedLogFile').info(logMessage);

      } else if (type == "kabulBank") {
        const logMessage = `عواید کرایه نمایندگی کابل بانک اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('KabulBankCreatedLogFile').info(logMessage);

      } else {
        const logMessage = `عواید بایسکل نگهبانی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('BicycleCreatedLogFile').info(logMessage);
      }

    } catch (error) {
      res.json({ error: "نمبر تعرفه یا نمبر مکتوب قبلا ثبت شده است." })
    }
  }
}

//! Update TwelveSection 
export const updateTwelveSection = async (req, res) => {

  const userName = req.session.username;

  const result = await TwelveSection.findOne({ where: { id: req.params.id } });

  const type = req.body.type;
  const name = req.body.name;
  const father_name = req.body.father_name;
  const maktub_num = req.body.maktub_num;
  const reference = req.body.reference;
  const year = req.body.year;
  const amount = req.body.amount;
  const desc = req.body.desc;
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
        type: type,
        name: name,
        father_name: father_name,
        maktub_num: maktub_num,
        reference: reference,
        year: year,
        amount: amount,
        desc: desc,
        tariff_num: tariff_num,
        tariff_date: tariff_date,
        pendant_num: pendant_num,
        pendant_date: pendant_date,
        remark: remark,
      }, { where: { id: req.params.id } });
      res.json(data)

      if (type == "bakery") {
        const logMessage = `عواید کرایه خبازی ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('BakeryUpdatedLogFile').info(logMessage);

      } else if (type == "hostelBread") {
        const logMessage = `عواید فروش نان قاق لیلیه ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('BreadUpdatedLogFile').info(logMessage);

      } else if (type == "paper") {
        const logMessage = `عواید فروش ضایعات کاغذ آمریت نشرات ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('PaperUpdatedLogFile').info(logMessage);

      } else if (type == "guestHouse") {
        const logMessage = `عواید کرایه مهمانخانه آمریت خدمات ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('GuestHouseUpdatedLogFile').info(logMessage);

      } else if (type == "farmaticProducts") {
        const logMessage = `عواید محصولات تجزیه فارمسوتیکی ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('FarmaticProductsUpdatedLogFile').info(logMessage);

      } else if (type == "agricultureFarm") {
        const logMessage = `عواید فارم تحقیقاتی پوهنزی زراعت ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('AgricultureFarmUpdatedLogFile').info(logMessage);

      } else if (type == "maforms") {
        const logMessage = `عواید فورم های ماستری ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('MAFormsUpdatedLogFile').info(logMessage);

      } else if (type == "animalClinic") {
        const logMessage = `عواید کلینیک حیوانی پوهنزی وترنری ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('AnimalClinicUpdatedLogFile').info(logMessage);
      
      }else if (type == "guaranteedRecursive") {
        const logMessage = `عواید تضمین و بازگشتی اضافه شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('GuaranteedRecursiveUpdatedLogFile').info(logMessage);
      
      } else if (type == "kabulBank") {
        const logMessage = `عواید کرایه نمایندگی کابل بانک ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('KabulBankUpdatedLogFile').info(logMessage);

      } else {
        const logMessage = `عواید بایسکل نگهبانی ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\nمدیر مسِوًول:${userName}`
        logger('BicycleUpdatedLogFile').info(logMessage);
      }
    } catch (error) {
      console.log(error)
    }
  }
}

//! Pendante TwelveSection 
export const pendanteTwelveSection = async (req, res) => {
  const result = await TwelveSection.findOne({ where: { id: req.params.id } });

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
      }, { where: { id: req.params.id } });
      res.json(data);

    } catch (error) {
      res.json({ error: "نمبر آویز یا نمبر مکتوب قبلا ثبت شده است." })
    }
  }
}
//! Delete TwelveSection
export const deleteTwelveSection = async (req, res) => {
  try {
    const data = await TwelveSection.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
