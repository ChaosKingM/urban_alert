const express = require('express');

const router = express.Router();
const reporteController = require('../controllers/reporteController');
const usuarioController = require('../controllers/usuarioController');
const userData = require('../helpers/jwt')
const auth = require('../middlewares/auth');

//GET
/**
 * @openapi
 * /api/reportes/getAllReports:
 *   get:
 *     tags:
 *       - Reportes
 *     summary: Obtener todos los reportes de UrbanAlert
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error en el servidor
 */
router.get("/getAllReports", reporteController.getReportes);

//POST
/**
 * @openapi
 * /api/reportes/createReports:
 *   post:
 *     tags:
 *       - Reportes
 *     summary: Crear un reporte para UrbanAlert
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descripcion
 *               - ubicacion
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               ubicacion:
 *                 type: string
 *             example:
 *               titulo: "Bache peligroso"
 *               descripcion: "Hay un bache muy grande en la calle principal"
 *               ubicacion: "Av. Reforma esq. Insurgentes"
 *     responses:
 *       201:
 *         description: Reporte creado exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post("/createReports", reporteController.createReporte);

module.exports = router;