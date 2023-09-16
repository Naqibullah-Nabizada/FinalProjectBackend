import Fasel from '../../models/forms/Fasel.js';
import FaselDetails from '../../models/forms/FaselDetails.js';

// //! GET Fasel
export const getAllFaselDetail = async (req, res) => {
  try {
    const response = await FaselDetails.findAll({
      include: [Fasel]
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! get Fasel Details
export const getFaselDetail = async (req, res) => {
  try {
    const response = await FaselDetails.findAll({
      where: { faselId: req.params.id },
      include: [Fasel]
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Create Fasel
export const createFaselDetail = async (req, res) => {

  const faselId = req.body.faselId;
  const desc = req.body.desc;
  const date = req.body.date;
  const reference = req.body.reference;
  const private_num = req.body.private_num;
  const refinement = req.body.refinement;
  const after_pay = req.body.after_pay;
  const befor_pay = req.body.befor_pay;
  const previous_considered = req.body.previous_considered;
  const commitment = req.body.commitment;
  const income = req.body.income;
  const transfer = req.body.transfer;
  const commitment_transfer = req.body.commitment_transfer;

  try {
    const data = await FaselDetails.create({
      faselId: faselId,
      desc: desc,
      date: date,
      reference: reference,
      private_num: private_num,
      refinement: refinement,
      after_pay: after_pay,
      befor_pay: befor_pay,
      previous_considered: previous_considered,
      commitment: commitment,
      income: income,
      transfer: transfer,
      commitment_transfer: commitment_transfer,
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}
