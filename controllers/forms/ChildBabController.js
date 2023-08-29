import ParentBabs from '../../models/forms/ParentBab.js';
import ChildBabs from './../../models/forms/ChildBab.js';

//! Get Child Bab
export const getChildBab = async (req, res) => {
  try {
    const response = await ChildBabs.findAll({
      include: [ParentBabs]
    });
    res.json(response);
  } catch (error) {
    console.log(error)
  } 
}


//! Create Child Bab
export const createChildBab = async (req, res) => {

  const name = req.body.name;
  const parentBabsId = req.body.parentBabsId;

  try {
    const data = await ChildBabs.create({
      name: name,
      parentBabsId: parentBabsId
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}
