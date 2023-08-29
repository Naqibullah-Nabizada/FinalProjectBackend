import Program from "../../../models/forms/budget/Program.js";

//! Get all Programs
export const getAllPrograms = async (req, res) => {
  try {
    const response = await Program.findAll();
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! Create Program
export const createProgram = async (req, res) => {

  const code = req.body.code;
  const desc = req.body.desc;
  const amount = req.body.amount;

  try {
    const data = await Program.create({
      code: code,
      desc: desc,
      amount: amount
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}
