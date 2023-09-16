import Fasel from '../../models/forms/Fasel.js';
import ParentBabs from '../../models/forms/ParentBab.js';

//! Get Fasel
export const getFasel = async (req, res) => {
  try {
    const response = await Fasel.findAll({
      include: [ParentBabs]
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  } 
}


//! Create Fasel
export const createFasel = async (req, res) => {

  const parentBabsId = req.body.parentBabsId;
  const code = req.body.code;
  const desc = req.body.desc;

  try {
    const data = await Fasel.create({
      parentBabsId: parentBabsId,
      code: code,
      desc: desc,
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}
