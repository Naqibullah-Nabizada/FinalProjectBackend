import ParentBabs from './../../models/forms/ParentBab.js';

//! Get Parent Bab
export const getParentBab = async (req, res) => {
  try {
    const response = await ParentBabs.findAll();
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


//! Create Parent Bab
export const createParentBab = async (req, res) => {

  const name = req.body.name;
  const year = req.body.year;

  try {
    const data = await ParentBabs.create({
      name: name,
      year: year
    })
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}
