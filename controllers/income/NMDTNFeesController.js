import { Op } from "sequelize";

import NMDTN from "../../models/income/NMDTN.js";

//! Get All NMDTNs
export const getNMDTN = async (req, res) => {
  try {
    let urlParts = req.url.split('/');
    let query = urlParts[urlParts.length - 1];

    const response = await NMDTN.findAll({
      where: {
        type: query
      }, order: [['name', 'asc']]
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
  } catch (error) {
    res.json({ error: "نمبر تعرفه قبلا ثبت شده است." })
  }
}


//! Pendante NMDTN 
export const pendanteNMDTN = async (req, res) => {
  const result = await NMDTN.findOne({ where: { id: req.params.id } });

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


//! Update NMDTN 
export const updateNMDTN = async (req, res) => {
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

  try {
    await result.update({
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
  } catch (error) {
    console.log(error)
  }
}

//! Delete NMDTN
export const deleteNMDTN = async (req, res) => {
  try {
    const data = await NMDTN.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
