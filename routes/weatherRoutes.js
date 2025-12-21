const express = require("express");
const { query } = require("express-validator");
const weatherController = require("../controllers/weatherController");

const router = express.Router();

router.get(
  "/weather",
  [
    query("city")
      .notEmpty()
      .withMessage("City is required")
      .isAlpha("en-US", { ignore: " " })
      .withMessage("City name must contain only letters")
  ],
  weatherController.getWeather
);

module.exports = router;
