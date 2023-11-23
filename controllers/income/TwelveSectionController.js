import { Op } from "sequelize";

import TwelveSection from "../../models/income/TwelveSection.js";

//! Get All TwelveSection
export const getTwelveSection = async (req, res) => {
  try {

    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];

    const response = await TwelveSection.findAll({
      where: {
        type: query
      }, order: [['name', 'asc']]
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
  } catch (error) {
    res.json({ error: "نمبر تعرفه قبلا ثبت شده است." })
  }
}



//! Update TwelveSection 
export const updateTwelveSection = async (req, res) => {
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

  try {
    await result.update({
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
    }, { where: { id: req.params.id } })
  } catch (error) {
    console.log(error)
  }
}


//! Pendante TwelveSection 
export const pendanteTwelveSection = async (req, res) => {
  const result = await TwelveSection.findOne({ where: { id: req.params.id } });

  const pendant_num = req.body.pendant_num;
  const pendant_date = req.body.pendant_date;
  const remark = req.body.remark;

  try {
    await result.update({
      pendant_num: pendant_num,
      pendant_date: pendant_date,
      remark: remark,
    }, { where: { id: req.params.id } })
  } catch (error) {
    res.json({ error: "نمبر آویز قبلا ثبت شده است." })
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
