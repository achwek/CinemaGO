const asyncHandler = require("express-async-handler")
const Country = require("../Models/countryModel")

const getCountries =async (req, res) => {
 try {
  const countrys = await Country.find()
 return res.status(200).json(countrys)
 } catch (error) {
  return res.status(500).json(error)
 }
}
const getCinema = async (req, res) => {
  try {
    // Find the cinema by the ID parameter in the URL
    const country = await Country.findById(req.params.id);
    // Return the cinema as JSON
    const cinema = country.cinema
    res.json(cinema);
  } catch (err) {
    // Handle any errors that occur
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
module.exports = {
    getCountries,
    getCinema,
}