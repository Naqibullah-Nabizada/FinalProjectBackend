import { Op } from "sequelize";
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


//! get Single Appropriation
export const getSingleAppropriation = async (req, res) => {
  try {
    const response = await Appropriations.findAll({
      where: { id: req.params.id },
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Search Appropriations
export const searchAppropriation = async (req, res) => {
  try {
    const response = await Appropriations.findAll({
      where: {
        [Op.or]: [
          { code: req.params.search },
          { dari_name: req.params.search },

          { pashto_name: req.params.search },
          { eng_name: req.params.search },
          { amount: req.params.search },
        ],
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Create Appropriation
export const createAppropriation = async (req, res) => {

  const code = req.body.code;
  const dari_name = req.body.dari_name;
  const pashto_name = req.body.pashto_name;
  const eng_name = req.body.eng_name;
  const main_amount = req.body.amount;
  const amount = req.body.amount;

  try {
    const data = await Appropriations.create({
      code: code,
      dari_name: dari_name,
      pashto_name: pashto_name,
      eng_name: eng_name,
      main_amount: main_amount,
      amount: amount
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}



//! Update 

export const updateAppropriation = async (req, res) => {
  const result = await Appropriations.findOne({ where: { id: req.params.id } });

  const code = req.body.code;
  const dari_name = req.body.dari_name;
  const pashto_name = req.body.pashto_name;
  const eng_name = req.body.eng_name;
  const main_amount = req.body.amount;
  const amount = req.body.amount;

  try {
    const data = await result.update({
      code: code,
      dari_name: dari_name,
      pashto_name: pashto_name,
      eng_name: eng_name,
      main_amount: main_amount,
      amount: amount
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}