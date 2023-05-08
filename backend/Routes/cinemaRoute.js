const express = require("express")
const router = express.Router()
const {
  getCinema,
  getCinemaById,
  addCinema,
  updateCinema,
  deleteCinema
} = require("../controllers/cinemaController")
const country = require("../Models/cinemaModel")

// get my tasks
router.get("/", getCinema)
router.get("/:id", getCinemaById);

router.post("/",addCinema)
router.put("/:id", updateCinema)
//delete Film
router.delete("/:id", deleteCinema)

module.exports = router