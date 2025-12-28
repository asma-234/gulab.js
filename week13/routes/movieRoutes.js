const express = require("express");
const router = express.Router();

const { searchMovies } = require("../controllers/movieController");
const { validateSearchQuery } = require("../middleware/validateRequest");

router.get("/search", validateSearchQuery, searchMovies);

module.exports = router;
