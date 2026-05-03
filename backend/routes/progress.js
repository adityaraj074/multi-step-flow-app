const express = require("express");
const router = express.Router();

const {
  saveProgress,
  getProgress,
} = require("../controllers/progressController");

router.post("/", saveProgress);
router.get("/", getProgress);

module.exports = router;
