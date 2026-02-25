const express = require('express');

const router = express.Router();
const reporteController = require('../controllers/reporteController');
const userData = require('../helpers/jwt')
const auth = require('../middlewares/auth');

//GET


/* app.get('/', function(req, res){
  res.render('index.ejs');
}); */

router.get("/getAllReports", auth, reporteController.getReportes);

//POST
router.post("/createReports", auth, reporteController.createReporte);

router.get("/register", userData.register);

module.exports = router;