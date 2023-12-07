import 'moment-jalaali';

import { Op } from "sequelize";

import moment from 'jalali-moment';
import jMoment from "moment-jalaali";
import { Sequelize } from 'sequelize';
import Fasel from '../../models/forms/Fasel.js';
import FaselDetails from './../../models/forms/FaselDetails.js';
import Appropriations from './../../models/forms/budget/Appropriations.js';

export const YearlyReportForms = async (req, res) => {

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
      // where: Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('date')), year),
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

  const shamsiYear = req.params.search;
  const gregorianYear = jMoment(`${shamsiYear}`, 'jYYYY/MM/DD').format('YYYY');

  try {
    const response = await FaselDetails.findAll({
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
      order: [['faselId', 'DESC']],
      where: {
        [Op.or]: [
          { faselId: req.params.search },
          { date: gregorianYear },
          { desc: req.params.search },
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



function convertPersianToEnglish(number) {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const englishDigits = '0123456789';

  let englishNumber = '';
  for (let i = 0; i < number.length; i++) {
    const digit = persianDigits.indexOf(number[i]);
    if (digit !== -1) {
      englishNumber += englishDigits[digit];
    } else {
      englishNumber += number[i];
    }
  }

  return englishNumber;
}


export const searchByDate = async (req, res) => {

  const { startDate, endDate } = req.query;

  const converStartDate = convertPersianToEnglish(startDate);
  const converEndDate = convertPersianToEnglish(endDate);

  const formattedStartDate = moment(converStartDate, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');
  const formattedEndDate = moment(converEndDate, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');

  const searchResults = await FaselDetails.findAll(
    {
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
      order: [['faselId', 'DESC']],
      where: {
        date: {
          [Op.between]: [formattedStartDate, formattedEndDate]
        }
      }
    }
  );
  res.json(searchResults);
};
