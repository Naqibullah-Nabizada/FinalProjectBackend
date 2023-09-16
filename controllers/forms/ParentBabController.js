import ParentBabs from './../../models/forms/ParentBab.js';
import Appropriations from './../../models/forms/budget/Appropriations.js';
import Program from './../../models/forms/budget/Program.js';

//! Get Parent Bab
export const getParentBab = async (req, res) => {
  try {
    const response = await ParentBabs.findAll();
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! Create Parent Bab
export const createParentBab = async (req, res) => {

  const name = req.body.name;
  const desc = req.body.desc;
  const kind_of = req.body.kind_of;
  const kind_of_budget = req.body.kind_of_budget;
  const amount = req.body.amount;

  try {
    const data = await ParentBabs.create({
      name: name,
      desc: desc,
      kind_of: kind_of,
      kind_of_budget: kind_of_budget,
      amount: amount
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }

  if (kind_of === 'program') {
    const program = Program.findOne({ where: { code: kind_of_budget } });
    program.update({
      amount: amount - amount
    })
  } else {
    const appro = Appropriations.findOne({ where: { code: kind_of_budget } });
    appro.update({
      amount: amount - amount
    })
  }
}
