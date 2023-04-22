const express = require("express")
const router = express.Router()
const {
  getFilms,
  addFilm,
  updateFilm,
  deleteFilm,
  getFilmById,
} = require("../Controllers/filmController")

// get my Film
router.get("/", getFilms)
router.get("/:id", getFilmById);
// add Film
router.post("/", addFilm)
//update Film
router.put("/:id", updateFilm)
//delete Film
router.delete("/:id", deleteFilm)

module.exports = router