import { Op } from "sequelize";
import BV from "../../models/income/BV.js";
import IdCard from "../../models/income/IdCard.js";
import NMDTN from "../../models/income/NMDTN.js";
import TwelveSection from "../../models/income/TwelveSection.js";

import moment from "jalali-moment";

//! ID Card Report
export const idCardReport = async (req, res) => {
  try {
    const idcard = await IdCard.findAll();
    res.json(idcard);
  } catch (error) {
    console.log(error);
  }
};

//! NocturnalFees Report
export const NocturnalFeesReport = async (req, res) => {
  try {
    const NocturnalFees = await NMDTN.findAll(
      { where: { type: "NocturnalFees" } }
    );
    res.json(NocturnalFees);
  } catch (error) {
    console.log(error);
  }
};

//! MAFees Report
export const MAFeesReport = async (req, res) => {
  try {
    const MAFees = await NMDTN.findAll(
      { where: { type: "MAFees" } }
    );
    res.json(MAFees);
  } catch (error) {
    console.log(error);
  }
};

//! English Eeploma Report
export const EnDeplomaReport = async (req, res) => {
  try {
    const EnDeploma = await NMDTN.findAll(
      { where: { type: "EnDeploma" } }
    );
    res.json(EnDeploma);
  } catch (error) {
    console.log(error);
  }
};

//! English Transcript Report
export const EnTranscriptReport = async (req, res) => {
  try {
    const EnTranscript = await NMDTN.findAll(
      { where: { type: "EnTranscript" } }
    );
    res.json(EnTranscript);
  } catch (error) {
    console.log(error);
  }
};

//! Notional Number Table Report
export const NationalNumReport = async (req, res) => {
  try {
    const NationalNum = await NMDTN.findAll(
      { where: { type: "NationalNum" } }
    );
    res.json(NationalNum);
  } catch (error) {
    console.log(error);
  }
};

//! Teacher Buildings Report
export const BuildingReport = async (req, res) => {
  try {
    const buildings = await BV.findAll(
      { where: { type: "buildings" } }
    );
    res.json(buildings);
  } catch (error) {
    console.log(error);
  }
};

//! Vehicle Report
export const VehicleReport = async (req, res) => {
  try {
    const vehicle = await BV.findAll(
      { where: { type: "vehicle" } }
    );
    res.json(vehicle);
  } catch (error) {
    console.log(error);
  }
};

//! Bakery Report
export const BakeryReport = async (req, res) => {
  try {
    const bakery = await TwelveSection.findAll(
      { where: { type: "bakery" } }
    );
    res.json(bakery);
  } catch (error) {
    console.log(error);
  }
};

//! Bread Report
export const BreadReport = async (req, res) => {
  try {
    const bread = await TwelveSection.findAll(
      { where: { type: "hostelBread" } }
    );
    res.json(bread);
  } catch (error) {
    console.log(error);
  }
};

//! Paper Report
export const PaperReport = async (req, res) => {
  try {
    const paper = await TwelveSection.findAll(
      { where: { type: "paper" } }
    );
    res.json(paper);
  } catch (error) {
    console.log(error);
  }
};

//! Guest House Report
export const GuestHouseReport = async (req, res) => {
  try {
    const guestHouse = await TwelveSection.findAll(
      { where: { type: "guestHouse" } }
    );
    res.json(guestHouse);
  } catch (error) {
    console.log(error);
  }
};

//! Farmatic Products Report
export const FarmaticProductsReport = async (req, res) => {
  try {
    const farmaticProducts = await TwelveSection.findAll(
      { where: { type: "farmaticProducts" } }
    );
    res.json(farmaticProducts);
  } catch (error) {
    console.log(error);
  }
};

//! AgricultureFarm Report
export const AgricultureFarm = async (req, res) => {
  try {
    const agricultureFarm = await TwelveSection.findAll(
      { where: { type: "agricultureFarm" } }
    );
    res.json(agricultureFarm);
  } catch (error) {
    console.log(error);
  }
};

//! Guaranteed Recursive Report
export const GuaranteedRecursiveReport = async (req, res) => {
  try {
    const guaranteedRecursive = await TwelveSection.findAll(
      { where: { type: "guaranteedRecursive" } }
    );
    res.json(guaranteedRecursive);
  } catch (error) {
    console.log(error);
  }
};

//! MA Forms Report
export const MAFormsReport = async (req, res) => {
  try {
    const MAForms = await TwelveSection.findAll(
      { where: { type: "MAForms" } }
    );
    res.json(MAForms);
  } catch (error) {
    console.log(error);
  }
};


//! Animal Clinic Report
export const AnimalClinicReport = async (req, res) => {
  try {
    const animal_clinic = await TwelveSection.findAll(
      { where: { type: "animalClinic" } }
    );
    res.json(animal_clinic);
  } catch (error) {
    console.log(error);
  }
};

//! Kabul Bank Report
export const KabulBankReport = async (req, res) => {
  try {
    const kabul_bank = await TwelveSection.findAll(
      { where: { type: "kabulBank" } }
    );
    res.json(kabul_bank);
  } catch (error) {
    console.log(error);
  }
};

//! Bicycle Report
export const BicycleReport = async (req, res) => {
  try {
    const bicycle = await TwelveSection.findAll(
      { where: { type: "bicycle" } }
    );
    res.json(bicycle);
  } catch (error) {
    console.log(error);
  }
};

//! =========================================================================================


//! Income Report
export const incomeReport = async (req, res) => {
  try {
    const idcard = await IdCard.findAll({ where: { year: moment().format('jYYYY') } });
    const bv = await BV.findAll({ where: { year: moment().format('jYYYY') } });
    const nmdtn = await NMDTN.findAll({ where: { year: moment().format('jYYYY') } });
    const twelvesection = await TwelveSection.findAll({ where: { year: moment().format('jYYYY') } });

    res.json([idcard, bv, nmdtn, twelvesection]);
  } catch (error) {
    console.log(error);
  }
};

//! Filter Income
export const filterIncome = async (req, res) => {
  try {
    const { searchBY, search } = req.params;

    const whereClause = {
      [searchBY]: search,
    };
    const response = await BV.findAll({ where: whereClause });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

//! Filter by DATE
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

  const { startDate, endDate, selectedOption } = req.query;

  const converStartDate = convertPersianToEnglish(startDate);
  const converEndDate = convertPersianToEnglish(endDate);

  const formattedStartDate = moment(converStartDate, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');
  const formattedEndDate = moment(converEndDate, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');

  if (selectedOption == "idcard") {
    const idcard = await IdCard.findAll(
      {
        where: {
          [Op.and]: [
            {
              createdAt: {
                [Op.between]: [formattedStartDate, formattedEndDate]
              }
            },
            {
              pendant_date: {
                [Op.not]: null
              }
            }
          ]
        }
      })
    res.json(idcard)

  } else if (selectedOption == "nocturnalFees" || selectedOption == "mafees" || selectedOption == "enDeploma"
    || selectedOption == "enTranscript" || selectedOption == "nationalNum") {
    const nmdtn = await NMDTN.findAll(
      {
        where: {
          [Op.and]: [
            {
              createdAt: {
                [Op.between]: [formattedStartDate, formattedEndDate]
              }
            },
            {
              type: {
                [Op.eq]: selectedOption
              }
            }
            ,
            {
              pendant_date: {
                [Op.not]: null
              }
            }
          ]
        }
      })
    res.json(nmdtn)
  }
  else if (selectedOption == "buildings" || selectedOption == "vehicle") {
    const bv = await BV.findAll(
      {
        where: {
          [Op.and]: [
            {
              createdAt: {
                [Op.between]: [formattedStartDate, formattedEndDate]
              }
            },
            {
              type: {
                [Op.eq]: selectedOption
              }
            }
            ,
            {
              pendant_date: {
                [Op.not]: null
              }
            }
          ]
        }
      })
    res.json(bv)

  } else if (selectedOption == "bakery" || selectedOption == "bread" || selectedOption == "paper"
    || selectedOption == "farmaticProducts" || selectedOption == "agricultureFarm" ||
    selectedOption == "guaranteedRecursive" || selectedOption == "guestHouse" || selectedOption == "bicycle"
    || selectedOption == "kabulBank" || selectedOption == "animalClinic" || selectedOption == "maforms") {
    const twelvesection = await TwelveSection.findAll(
      {
        where: {
          [Op.and]: [
            {
              createdAt: {
                [Op.between]: [formattedStartDate, formattedEndDate]
              }
            },
            {
              type: {
                [Op.eq]: selectedOption
              }
            }
            ,
            {
              pendant_date: {
                [Op.not]: null
              }
            }
          ]
        }
      })
    res.json(twelvesection)
  }
  else if (selectedOption == "all") {

    const idcard = await IdCard.findAll(
      {
        where: {
          [Op.and]: [
            {
              createdAt: {
                [Op.between]: [formattedStartDate, formattedEndDate]
              }
            },
            {
              pendant_date: {
                [Op.not]: null
              }
            }
          ]
        }
      })

    const nmdtn = await NMDTN.findAll(
      {
        where: {
          [Op.and]: [
            {
              createdAt: {
                [Op.between]: [formattedStartDate, formattedEndDate]
              }
            },
            {
              pendant_date: {
                [Op.not]: null
              }
            }
          ]
        }
      })

    const bv = await BV.findAll(
      {
        where: {
          [Op.and]: [
            {
              createdAt: {
                [Op.between]: [formattedStartDate, formattedEndDate]
              }
            },
            {
              pendant_date: {
                [Op.not]: null
              }
            }
          ]
        }
      })

    const twelvesection = await TwelveSection.findAll({
      where: {
        [Op.and]: [
          {
            createdAt: {
              [Op.between]: [formattedStartDate, formattedEndDate]
            }
          },
          {
            pendant_date: {
              [Op.not]: null
            }
          }
        ]
      }
    });

    res.json([idcard, nmdtn, bv, twelvesection]);
  } else {
    res.json([]);
  }

};
