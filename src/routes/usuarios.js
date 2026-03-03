const express = require('express');

const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
//const userData = require('../helpers/jwt')
//const auth = require('../middlewares/auth');

router.get("/getAllUsers", usuarioController.getAllUsers);

router.post("/createUser", usuarioController.createUser);

router.post("/loginUser", usuarioController.loginUser);

//router.get("/register", userData.register);

module.exports = router;