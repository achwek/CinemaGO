const express = require("express")
const router = express.Router()
const {
  getPrtners,
  getPartners,
  addFPartner,
  updatePartner,
  deletePartner,
  getPartnerById,
} = require("../Controllers/partnerController")

// get my Film
router.get("/", getPartners)
router.get("/:id", getPartnerById);
// add Film
router.post("/", addFPartner)
//update Film
router.put("/:id", updatePartner)
//delete Film
router.delete("/:id", deletePartner)

module.exports = router