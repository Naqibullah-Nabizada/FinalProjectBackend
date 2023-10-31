import { Sequelize } from 'sequelize';
import Fasel from '../../models/forms/Fasel.js';
import FaselDetails from './../../models/forms/FaselDetails.js';
import Appropriations from './../../models/forms/budget/Appropriations.js';

// export const YearlyReportForms = async (req, res) => {
//   try {

//     const befor_pay = [Sequelize.literal('SUM(befor_pay)'), 'sum_befor_pay']
//     const after_pay = [Sequelize.literal('SUM(after_pay)'), 'sum_after_pay']
//     const forms = await FaselDetails.findAll({
//       attributes: [
//         'faselId',
//         'desc',
//         befor_pay, 
//         after_pay,
//       ],
//       group: ['faselId'], // Group the results by 'faselId'
//       include: [Fasel],
//       raw: true
//     });

//     // Calculate the sum of befor_pay and after_pay for each unique faselId
//     const sumData = forms.reduce((acc, form) => {
//       const { faselId, befor_pay, after_pay } = form;

//       if (acc[faselId]) {
//         acc[faselId].befor_pay += befor_pay;
//         acc[faselId].after_pay += after_pay;
//       } else {
//         acc[faselId] = { befor_pay, after_pay };
//       }

//       return acc;
//     }, {});

//     // Add the sumData to each form object in the response
//     const formsWithSum = forms.map((form) => {
//       const { faselId } = form;
//       const { befor_pay, after_pay } = sumData[faselId];

//       return {
//         ...form.toJSON(),
//         sum: {
//           befor_pay,
//           after_pay,
//         },
//       };
//     });

//     res.json(formsWithSum);
//   } catch (error) {
//     console.log(error);
//   }
// };


export const YearlyReportForms = async (req, res) => {
  try {
    const forms = await FaselDetails.findAll({
      attributes: ['faselId', 'desc',
        [Sequelize.literal('SUM(befor_pay)'), 'befor_pay'],
        [Sequelize.literal('SUM(after_pay)'), 'after_pay'],
        'income', 'commitment', 'commitment_transfer'],
      include: [Fasel],
      group: ['faselId'],
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


//! Yearly ReportForms
// export const YearlyReportForms = async (req, res) => {
//   try {
//     const forms = await FaselDetails.findAll();
//     res.json(forms);
//   } catch (error) {
//     console.log(error);
//   }
// };
