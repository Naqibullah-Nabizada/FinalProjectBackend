import path from "path";
import MAFees from "../../models/income/MAFees.js";

//! Get All MAFeess
export const getMAFees = async (req, res) => {
  try {
    const response = await MAFees.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message)
  }
}

//! Get Single MAFees
export const singleMAFees = async (req, res) => {
  try {
    const response = await MAFees.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

//! Search MAFees
export const searchMAFees = async (req, res) => {
  try {
    const response = await MAFees.findOne({ where: { reference: req.body.reference } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

//! Create MAFees
export const createMAFees = async (req, res) => {

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
    const data = await MAFees.create({
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


//! Update MAFees 
export const updateMAFees = async (req, res) => {
  const MAFees = await MAFees.findOne({ where: { id: req.params.id } });

  let fileName = "";
  if (req.files === null) {
    fileName = MAFees.image;
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
      await MAFees.update({
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

//! Delete MAFees
export const deleteMAFees = async (req, res) => {
  try {
    const data = await MAFees.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
