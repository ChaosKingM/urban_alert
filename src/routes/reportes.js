const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

//GET

router.get("/getAllReports", reporteController.getReportes);

//POST
router.post("/createReports", reporteController.createReporte);

module.exports = router;