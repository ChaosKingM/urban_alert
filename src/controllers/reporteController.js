const reporte = require('../models/reporte')

// Get all reports
// req = request body {} params url_param1=datos123
// res = response
exports.getReportes = async (req, res) => {
    try {
        const reportes = await reporte.find();
        res.json(reportes);
    } catch (error) {
        res.status(500).json({error: "Error: Get Reports", message: error});
    }
}

//Create new report
exports.createReporte = async (req, res) => {
    try {
        const {titulo, descripcion, ubicacion} = req.body;

        //Logic
        let prioridad = "media";
        if(descripcion.toLowerCase().includes('fuego') || 
        descripcion.toLowerCase().includes('incendio')
        )   {
            prioridad = "alta"
        }

        const nuevoReporte = new reporte({
            titulo,
            descripcion,
            ubicacion,
            prioridad
        });

        await nuevoReporte.save();
        res.status(201).json(nuevoReporte)
    } catch (error) {
        res.status(500).json({error: "Error: Create reports", message: error})
    }
}