const express = require("express")
const router = express.Router()
const {
  getCountries,
  getCinema,
} = require("../controllers/countryController")
const country = require("../Models/countryModel")

// get my tasks
router.get("/", getCountries)
router.get("/:id", getCinema)

module.exports = router