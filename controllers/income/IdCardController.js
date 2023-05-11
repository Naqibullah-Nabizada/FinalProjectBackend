import path from "path";
import { Op } from "sequelize";
import IdCard from "../../models/income/IdCard.js";

//! Get All IdCards
export const getIdCards = async (req, res) => {
  try {
    const response = await IdCard.findAll({
      where: {
        pendant_num: {
          [Op.not]: null
          // [Op.is]: null
        }
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error.message)
  }
}

//! Get Search IdCard
export const singleIdCard = async (req, res) => {
  try {
    console.log(req.params)
    const response = await IdCard.findAll({
      where: {
        [Op.or]: [
          { reference: req.params.search },
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

// //! Search IdCard
// export const searchIdCard = async (req, res) => {
//   try {
//     const response = await IdCard.findOne({ where: { reference: req.params.search } });
//     res.json(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

//! Create IdCard
export const createIdCard = async (req, res) => {

  const name = req.body.name;
  const father_name = req.body.father_name;
  const count = req.body.count;
  const reference = req.body.reference;
  const cost = req.body.cost;
  const tariff_num = req.body.tariff_num;
  const tariff_date = req.body.tariff_date;
  const pendant_num = req.body.pendant_num;
  const pendant_date = req.body.pendant_date;
  const remark = req.body.remark;

  try {
    const data = await IdCard.create({
      name: name,
      father_name: father_name,
      reference: reference,
      count: count,
      cost: cost,
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


//! Update IdCard 
export const updateIdCard = async (req, res) => {
  const IdCard = await IdCard.findOne({ where: { id: req.params.id } });

  let fileName = "";
  if (req.files === null) {
    fileName = IdCard.image;
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
      await IdCard.update({
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

//! Delete IdCard
export const deleteIdCard = async (req, res) => {
  try {
    const data = await IdCard.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
