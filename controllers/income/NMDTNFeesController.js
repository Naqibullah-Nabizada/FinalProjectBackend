import path from "path";
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
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error.message)
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
  const pendant_num = req.body.pendant_num;
  const pendant_date = req.body.pendant_date;
  const remark = req.body.remark;

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
      pendant_num: pendant_num,
      pendant_date: pendant_date,
      remark: remark,
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}


//! Update NMDTN 
export const updateNMDTN = async (req, res) => {
  const NMDTN = await NMDTN.findOne({ where: { id: req.params.id } });

  let fileName = "";
  if (req.files === null) {
    fileName = NMDTN.image;
  } else {
    const title = req.body.title;
    const desc = req.body.desc;
    const author = req.body.author;
    const time = req.body.time;
    const file = req.files.image;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const dateNow = Math.random(Date.now())
    fileName = dateNow + ext;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLocaleLowerCase())) {
      return res.json({ msg: "image format is not valid" });
    }

    if (fileSize > 5000000) return res.json({ msg: 'image must be maximum 5 mb' })

    file.mv(`./public/images/${fileName}`, async (err) => {
      if (err) return res.json({ msg: err.message });
    })

    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
      await NMDTN.update({
        title: title,
        desc: desc,
        author: author,
        time: time,
        image: fileName,
        url: url
      }, { where: { id: req.params.id } })
    } catch (error) {
      console.log(error)
    }
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
