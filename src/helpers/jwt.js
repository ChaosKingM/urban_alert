const jwt = require('jsonwebtoken');
//Create new user registration
exports.register = async (req, res) => {
    try {   

        const payload = {
            email: "tucola",
            password: "tu_contraseña_larga_negra_y_segura"
        }
        
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '15m'}
        )

        res.json({
            msg: 'Login exitosa',
            token: token,
        })


      /*   res.json({
            error: null,
            data: 'aquí va ir la data'
        }) */
    } catch (error) {
        res.status(500).json({error: "Error: Create usr data", message: error})
    }
}

