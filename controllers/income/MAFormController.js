import path from "path";
import MAForm from "../../models/income/MAForm.js";

//! Get All MAForms
export const getMAForms = async (req, res) => {
  try {
    const response = await MAForm.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message) 
  }
}

//! Get Single MAForm
export const singleMAForm = async (req, res) => {
  try {
    const response = await MAForm.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Create MAForm
export const createMAForm = async (req, res) => {

  const fullname = req.body.fullname;
  const maktub_num = req.body.maktub_num;
  const date = req.body.date;
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
    const data = await MAForm.create({
      fullname: fullname,
      maktub_num: maktub_num,
      date: date,
      reference: reference,
      year: year,
      amount: amount,
      desc: desc,
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


//! Update MAForm 
export const updateMAForm = async (req, res) => {
  const MAForm = await MAForm.findOne({ where: { id: req.params.id } });

  let fileName = "";
  if (req.files === null) {
    fileName = MAForm.image;
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
      await MAForm.update({
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

//! Delete MAForm
export const deleteMAForm = async (req, res) => {
  try {
    const data = await MAForm.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
