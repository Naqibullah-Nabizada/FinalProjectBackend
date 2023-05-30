import path from "path";
import TwelveSection from "../../models/income/TwelveSection.js";

//! Get All TwelveSection
export const getTwelveSection = async (req, res) => {
  try {
    const response = await TwelveSection.findAll();
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
          { fullname: req.params.search },
          { maktub_num: req.params.search },
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

//! Get Single TwelveSection
export const singleTwelveSection = async (req, res) => {
  try {
    const response = await TwelveSection.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Create TwelveSection
export const createTwelveSection = async (req, res) => {

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
    const data = await TwelveSection.create({
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


//! Update TwelveSection 
export const updateTwelveSection = async (req, res) => {
  const TwelveSection = await TwelveSection.findOne({ where: { id: req.params.id } });

  let fileName = "";
  if (req.files === null) {
    fileName = TwelveSection.image;
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
      await TwelveSection.update({
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

//! Delete TwelveSection
export const deleteTwelveSection = async (req, res) => {
  try {
    const data = await TwelveSection.destroy({ where: { id: req.params.id } });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
