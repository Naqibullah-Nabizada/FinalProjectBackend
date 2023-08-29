import Appropriations from "../../../models/forms/budget/Appropriations.js";

//! Get all Appropriations
export const getAllAppropriations = async (req, res) => {
  try {
    const response = await Appropriations.findAll();
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! Create Appropriation
export const createAppropriation = async (req, res) => {

  const code = req.body.code;
  const dari_name = req.body.dari_name;
  const pashto_name = req.body.pashto_name;
  const eng_name = req.body.eng_name;
  const amount = req.body.amount;

  try {
    const data = await Appropriations.create({
      code: code,
      dari_name: dari_name,
      pashto_name: pashto_name,
      eng_name: eng_name,
      amount: amount
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}
