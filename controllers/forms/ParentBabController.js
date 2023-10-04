import { Op } from 'sequelize';
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


//! Search Parent Bab
export const searchParentBab = async (req, res) => {
  try {
    const response = await ParentBabs.findAll({
      where: {
        [Op.or]: [
          { name: req.params.search },
          { kind_of_budget: req.params.search },
        ],
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Add Parent Bab
export const createParentBab = async (req, res) => {
  const { name, desc, kind_of, kind_of_budget, amount } = req.body;

  try {
    const data = await ParentBabs.create({
      name,
      desc,
      kind_of,
      kind_of_budget,
      amount
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }

  if (kind_of === 'program') {
    const program = await Program.findOne({ where: { code: kind_of_budget } });
    program.update({ amount: program.amount - amount });
  } else {
    const appro = await Appropriations.findOne({ where: { code: kind_of_budget } });
    appro.update({ amount: appro.amount - amount });
  }
  
};