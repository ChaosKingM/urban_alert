const Usuario = require('../models/usuarios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create a registerUsuario
exports.getAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({error: "Error: Get Reports", message: error});
    }
}

exports.createUser = async (req,res) => {
    try {
        const {email, password} = req.body;
        const usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(401).json({msg: 'El usuario ya existe'});
        }

        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);

        const nuevoUser = new Usuario({
            email,
            password: newPassword
        })

        await nuevoUser.save()
        res.status(201).json(nuevoUser);
    } catch (error) {
        res.status(500).json({error: "Error: Create user", message: error})
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const usuario = await Usuario.findOne({email});
        //Verificar email

        if(!usuario) return res.status(400).json({msg: 'El usuario no existe. No registrado'});
        
        //Verificar la password
        const isMatch = await bcrypt.compare(password, usuario.password);

        if (!isMatch) return res.status(400).json({msg: 'La contraseña no es correcta. Credencial Invalida'});

        const payload = {
            usuario: {
                id: usuario.id,
                email: usuario.email
            }
        }

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h'},
            (err, token) => {
                if(err) throw err;
                res.json({token});
            }
        )


    } catch (error) {
        res.status(500).json({msg: 'Error en el servidor', error: error})
    }
}
//Verify if the user already exists
//findOne({email}
// send error message if the user exists

// Encrypt password
// Use the middleware fhelpers function

// Save user in DB
// Send respose