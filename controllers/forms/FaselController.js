import ChildBabs from '../../models/forms/ChildBab.js';
import Fasels from './../../models/forms/Fasel.js';

//! GET Fasel
export const getFasel = async (req, res) => {
  try {
    const response = await Fasels.findAll({
      include: [ChildBabs]
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! Create Fasel
export const createFasel = async (req, res) => {

  const name = req.body.name;
  const description = req.body.description;
  const childBabsId = req.body.childBabsId;
  try {
    const data = await Fasels.create({
      name: name,
      description: description,
      childBabsId: childBabsId
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}
