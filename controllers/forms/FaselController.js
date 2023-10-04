import { Op } from 'sequelize';
import Fasel from '../../models/forms/Fasel.js';
import Appropriations from '../../models/forms/budget/Appropriations.js';

//! Get Fasel
export const getFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      include: [Appropriations]
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! get Single Fasel
export const getSingleFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      where: { id: req.params.id },
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Search Fase
export const searchFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      include: [Appropriations],
      where: {
        [Op.or]: [
          { code: req.params.search },
        ],
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}


//! Create Fasel
export const createFasel = async (req, res) => {

  const appropriationId = req.body.appropriationId;
  const code = req.body.code;
  const desc = req.body.desc;
  const amount = req.body.amount;

  try {
    const data = await Fasel.create({
      appropriationId: appropriationId,
      code: code,
      desc: desc,
      amount: amount,
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }

  if (amount > 0) {
    const appro = await Appropriations.findOne({ where: { id: appropriationId } });
    appro.update({ amount: appro.amount - amount });
  }

}


//! Update 

export const updateFasel = async (req, res) => {
  const result = await Fasel.findOne({ where: { id: req.params.id } });

  const appropriationId = req.body.appropriationId;
  const code = req.body.code;
  const desc = req.body.desc;
  const amount = req.body.amount;

  try {
    const data = await result.update({
      appropriationId: appropriationId,
      code: code,
      desc: desc,
      amount: amount,
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}