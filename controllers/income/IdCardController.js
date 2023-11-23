import { Op } from "sequelize";
import IdCard from "../../models/income/IdCard.js";

//! Get All IdCards
export const getIdCards = async (req, res) => {
  try {
    const response = await IdCard.findAll({ order: [['name', 'asc']] });
    res.json(response);
  } catch (error) {
    console.log(error.message)
  }
}

//! Get Search IdCard
export const searchIdCard = async (req, res) => {
  try {
    const response = await IdCard.findAll({
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
      }

    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

//! get single IdCard
export const getSingleIdCard = async (req, res) => {
  try {
    const response = await IdCard.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

//! Create IdCard
export const createIdCard = async (req, res) => {

  const name = req.body.name;
  const father_name = req.body.father_name;
  const count = req.body.count;
  const reference = req.body.reference;
  const cost = req.body.cost;
  const year = req.body.year;
  const tariff_num = req.body.tariff_num;
  const tariff_date = req.body.tariff_date;

  try {
    const data = await IdCard.create({
      name: name,
      father_name: father_name,
      reference: reference,
      count: count,
      cost: cost,
      year: year,
      tariff_num: tariff_num,
      tariff_date: tariff_date,
    })
    res.json(data);
  } catch (error) {
    res.json({ error: "نمبر تعرفه قبلا ثبت شده است." })
  }
}

//! Pendante IdCard 
export const pendanteIdCard = async (req, res) => {

  const result = await IdCard.findOne({ where: { id: req.params.id } });

  const pendant_num = req.body.pendant_num;
  const pendant_date = req.body.pendant_date;
  const remark = req.body.remark;

  try {
    await result.update({
      pendant_num: pendant_num,
      pendant_date: pendant_date,
      remark: remark,
    }, { where: { id: req.params.id } });
  } catch (error) {
    res.json({ error: "نمبر آویز قبلا ثبت شده است." })
  }
}


//! Update IdCard 
export const updateIdCard = async (req, res) => {

  const result = await IdCard.findOne({ where: { id: req.params.id } });

  const name = req.body.name;
  const father_name = req.body.father_name;
  const count = req.body.count;
  const reference = req.body.reference;
  const cost = req.body.cost;
  const year = req.body.year;
  const tariff_num = req.body.tariff_num;
  const tariff_date = req.body.tariff_date;
  const pendant_num = req.body.pendant_num;
  const pendant_date = req.body.pendant_date;
  const remark = req.body.remark;

  try {
    await result.update({
      name: name,
      father_name: father_name,
      reference: reference,
      count: count,
      cost: cost,
      year: year,
      tariff_num: tariff_num,
      tariff_date: tariff_date,
      pendant_num: pendant_num,
      pendant_date: pendant_date,
      remark: remark,
    }, { where: { id: req.params.id } });
  } catch (error) {
    console.log(error)
  }
}

//! Delete IdCard
export const deleteIdCard = async (req, res) => {
  try {
    const data = await IdCard.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
