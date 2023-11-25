import { Op } from "sequelize";

import moment from 'jalali-moment';
import { Sequelize } from 'sequelize';
import Fasel from '../../models/forms/Fasel.js';
import FaselDetails from './../../models/forms/FaselDetails.js';
import Appropriations from './../../models/forms/budget/Appropriations.js';

export const YearlyReportForms = async (req, res) => {
  const dateStr = new Date();
  const year = moment(dateStr, 'YYYY-MM-DD').year();

  try {
    const forms = await FaselDetails.findAll({
      attributes: [
        'faselId',
        'date',
        'desc',
        [Sequelize.literal('SUM(befor_pay)'), 'befor_pay'],
        [Sequelize.literal('SUM(after_pay)'), 'after_pay'],
        'income',
        'commitment',
        'commitment_transfer'
      ],
      include: [Fasel],
      group: ['faselId'],
      where: Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('date')), year),
      order: [['faselId', 'DESC']]
    });

    res.json(forms);
  } catch (error) {
    console.log(error);
  }
};


export const ReportForms = async (req, res) => {
  try {
    const forms = await Appropriations.findAll();
    res.json(forms);
  } catch (error) {
    console.log(error);
  }
};



//! Search Form Report
export const searchFormReport = async (req, res) => {
  try {
    const response = await FaselDetails.findAll({
      where: {
        [Op.or]: [
          { befor_pay: req.params.search },
          { after_pay: req.params.search },
        ],
      }
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}