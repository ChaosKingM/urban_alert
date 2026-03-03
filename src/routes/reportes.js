const express = require('express');

const router = express.Router();
const reporteController = require('../controllers/reporteController');
const usuarioController = require('../controllers/usuarioController');
const userData = require('../helpers/jwt')
const auth = require('../middlewares/auth');

//GET


/* app.get('/', function(req, res){
  res.render('index.ejs');
}); */

router.get("/getAllReports", reporteController.getReportes);

//POST
router.post("/createReports", reporteController.createReporte);

module.exports = router;