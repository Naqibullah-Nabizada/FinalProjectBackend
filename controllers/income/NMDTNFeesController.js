import { Op } from "sequelize";

import moment from "jalali-moment";
import NMDTN from "../../models/income/NMDTN.js";
import logger from "../../models/logModel.js";

//! Get All NMDTNs
export const getNMDTN = async (req, res) => {
  try {
    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];

    const response = await NMDTN.findAll({
      where: {
        type: query
      }, order: [['year', 'DESC']]
    });

    res.json(response);
  } catch (error) {
    console.log(error.message)
  }
}


//! get single NMDTN
export const getSingleNMDTN = async (req, res) => {
  try {
    const response = await NMDTN.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

//! Get Search NMDTN
export const searchNMDTN = async (req, res) => {
  try {

    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];
    let result = query.split(":")[0].match(/[a-zA-Z]+/)[0];

    const response = await NMDTN.findAll({
      where: {
        [Op.or]: [
          { name: req.params.search },
          { father_name: req.params.search },
          { faculty: req.params.search },
          { department: req.params.search },
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

//! Create NMDTN
export const createNMDTN = async (req, res) => {

  const userName = req.session.username;

  const name = req.body.name;
  const father_name = req.body.father_name;
  const type = req.body.type;
  const fees = req.body.fees;
  const internel_fees = req.body.internel_fees;
  const year = req.body.year;
  const faculty = req.body.faculty;
  const department = req.body.department;
  const semester = req.body.semester;
  const tariff_num = req.body.tariff_num;
  const tariff_date = req.body.tariff_date;

  if (moment(req.body.tariff_date).format("jYYYY-MM-DD") > moment().format("jYYYY-MM-DD")) {
    res.json({ error: "تاریخ تعرفه نا معتبر است" })
  } else {

    try {
      const data = await NMDTN.create({
        name: name,
        father_name: father_name,
        faculty: faculty,
        department: department,
        semester: semester,
        type: type,
        fees: fees,
        internel_fees: internel_fees,
        year: year,
        tariff_num: tariff_num,
        tariff_date: tariff_date,
      })
      res.json(data);

      if (type == "nocturnalFees") {
        const logMessage = `عواید فیس محصلین برنامه های شبانه اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('NocturnalCreatedLogFile').info(logMessage);
      } else if (type == "mafees") {
        const logMessage = `عواید فیس محلصین برنامه های ماستری اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('MAFeesCreatedLogFile').info(logMessage);
      } else if (type == "EnDeploma") {
        const logMessage = `عواید دیپلوم زبان انگلیسی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('EngDeplomaCreatedLogFile').info(logMessage);
      } else if (type == "EnTranscript") {
        const logMessage = `عواید ترانسکریپت زبان انگلیسی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('EngTranscriptCreatedLogFile').info(logMessage);
      } else {
        const logMessage = `عواید جدول نمرات ملی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('NationalNumTableCreatedLogFile').info(logMessage);
      }
    } catch (error) {
      res.json({ error: "نمبر تعرفه قبلا ثبت شده است." })
    }
  }
}


//! Update NMDTN 
export const updateNMDTN = async (req, res) => {

  const userName = req.session.username;

  const result = await NMDTN.findOne({ where: { id: req.params.id } });

  const name = req.body.name;
  const father_name = req.body.father_name;
  const type = req.body.type;
  const fees = req.body.fees;
  const internel_fees = req.body.internel_fees;
  const year = req.body.year;
  const faculty = req.body.faculty;
  const department = req.body.department;
  const semester = req.body.semester;
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
        faculty: faculty,
        department: department,
        semester: semester,
        type: type,
        fees: fees,
        internel_fees: internel_fees,
        year: year,
        tariff_num: tariff_num,
        tariff_date: tariff_date,
        pendant_num: pendant_num,
        pendant_date: pendant_date,
        remark: remark,

      }, { where: { id: req.params.id } })
      res.json(data);

      if (type == "nocturnalFees") {
        const logMessage = `عواید فیس محصلین برنامه های شبانه ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`
        logger('NocturnalUpdatedLogFile').info(logMessage);

      } else if (type == "mafees") {
        const logMessage = `عواید فیس محلصین برنامه های ماستری ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`
        logger('MAFeesUpdatedLogFile').info(logMessage);

      } else if (type == "EnDeploma") {
        const logMessage = `عواید دیپلوم زبان انگلیسی ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`
        logger('EngDeplomaUpdatedLogFile').info(logMessage);

      } else if (type == "EnTranscript") {
        const logMessage = `عواید ترانسکریپت زبان انگلیسی ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`
        logger('EngTranscriptUpdatedLogFile').info(logMessage);

      } else {
        const logMessage = `عواید جدول نمرات ملی ویرایش شد.:\nمعلومات قبلی : ${JSON.stringify(previousData)}\nمعلومات ویرایش شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`
        logger('NationalNumTableUpdatedLogFile').info(logMessage);
      }
    } catch (error) {
      console.log(error)
    }
  }
}


//! Pendante NMDTN 
export const pendanteNMDTN = async (req, res) => {

  const userName = req.session.username;

  const result = await NMDTN.findOne({ where: { id: req.params.id } });

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

      if (result.type == "nocturnalFees") {
        const logMessage = `آویز بانکی فیس محصلین برنامه های شبانه اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('NocturnalPendantedLogFile').info(logMessage);
      } else if (result.type == "mafees") {
        const logMessage = `آویز بانکی فیس محلصین برنامه های ماستری اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('MAFeesPendantedLogFile').info(logMessage);
      } else if (result.type == "EnDeploma") {
        const logMessage = `آویز بانکی دیپلوم زبان انگلیسی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('EngDeplomaPendantedLogFile').info(logMessage);
      } else if (result.type == "EnTranscript") {
        const logMessage = `آویز بانکی ترانسکریپت زبان انگلیسی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('EngTranscriptPendantedLogFile').info(logMessage);
      } else {
        const logMessage = `آویز بانکی جدول نمرات ملی اضافه شد.:\nمعلومات اضافه شده: ${JSON.stringify(data)}\n مدیر مسِوًول:${userName}`;
        logger('NationalNumTablePendantedLogFile').info(logMessage);
      }
    } catch (error) {
      res.json({ error: "نمبر آویز قبلا ثبت شده است." })
    }
  }
}
