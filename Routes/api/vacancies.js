const router = require("express").Router();
const VacancyController = require("../../controllers/VacancyController");

router.get("/", VacancyController.list);

module.exports = router;
