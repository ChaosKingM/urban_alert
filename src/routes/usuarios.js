const express = require('express');

const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
//const userData = require('../helpers/jwt')
const auth = require('../middlewares/auth');

//GET
/**
 * @openapi
 * /api/auth/getAllUsers:
 *   get:
 *     tags:
 *       - Usuario
 *     summary: Obtener todos los usuarios de UrbanAlert
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error en el servidor
 */
router.get("/getAllUsers", usuarioController.getAllUsers);

//POST
/**
 * @openapi
 * /api/auth/createUser:
 *   post:
 *     tags:
 *       - Usuario
 *     summary: Crear un usuario para UrbanAlert
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: "fulanito@gmail.com"
 *               password: "unabuenapassword"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post("/createUser", usuarioController.createUser);

//POST
/**
 * @openapi
 * /api/auth/loginUser:
 *   post:
 *     tags:
 *       - Usuario
 *     summary: Logear un usuario de UrbanAlert
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: "fulanito@gmail.com"
 *               password: "unabuenapassword"
 *     responses:
 *       201:
 *         description: Usuario logeado exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post("/loginUser", usuarioController.loginUser);

//router.get("/register", userData.register);

module.exports = router;