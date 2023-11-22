import moment from 'jalali-moment';
import { Op } from 'sequelize';
import Fasel from '../../models/forms/Fasel.js';
import Appropriations from '../../models/forms/budget/Appropriations.js';

//! Get Fasel
export const getFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      where: { year: moment().format("jYYYY") },
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
          { year: req.params.search },
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
  const year = req.body.year;
  const code = req.body.code;
  const desc = req.body.desc;
  const main_amount = req.body.amount;
  const amount = req.body.amount;

  if (amount > 0) {
    const appro = await Appropriations.findOne({ where: { id: appropriationId } });
    if (appro.amount >= amount) {

      try {
        const data = await Fasel.create({
          appropriationId: appropriationId,
          year: year,
          code: code,
          desc: desc,
          main_amount: main_amount,
          amount: amount,
        })
        res.json(data);
      } catch (error) {
        console.log(error)
      }

      appro.update({ amount: appro.amount - amount });
    } else {
      res.json({ error: "مقدار تخصیص بیشتر از مقدار بودجه است." })
    }
  }

}


//! Update 

export const updateFasel = async (req, res) => {


  const appropriationId = req.body.appropriationId;
  const year = req.body.year;
  const code = req.body.code;
  const desc = req.body.desc;
  const main_amount = req.body.amount;
  const amount = req.body.amount;

  if (amount > 0) {

    const appro = await Appropriations.findOne({ where: { id: appropriationId } });

    if (appro.amount >= amount) {

      const result = await Fasel.findOne({ where: { id: req.params.id } });

      const previes_budget = parseFloat(result.amount);
      const appro_amount = parseFloat(appro.amount);
      const budget = parseFloat(amount);

      appro.update({ amount: appro_amount - budget + previes_budget });

      try {
        const data = await result.update({
          appropriationId: appropriationId,
          year: year,
          code: code,
          desc: desc,
          main_amount: main_amount,
          amount: amount,
        })
        res.json(data);
      } catch (error) {
        console.log(error)
      }

    } else {
      res.json({ error: "مقدار تخصیص بیشتر از مقدار بودجه است." })
    }
  }

}