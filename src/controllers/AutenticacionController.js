const jwt = require('jsonwebtoken');

const AutenticacionController = {}

const JWT_KEY= process.env.JWT_KEY;

const usuarios = [
    {id: 1, usuario: 'Lord', contrasenia: '123456'},
    {id: 2, usuario: 'Lady', contrasenia: 'abcdf'},
];

AutenticacionController.autenticar = (req, res) => {
    const usuario = req.body.usuario;
    
    //Simular autenticacion
    let token = jwt.sign({ id: 1 }, JWT_KEY);

    res.json({token: token});
}

AutenticacionController.registrar = (req, res) => {
    //Simular registro...
}

AutenticacionController.verificarToken = (req, res) => {
    const token = req.body.token;

    let desencriptado = jwt.verify(token, JWT:KEY);

    res.json({datos: desencriptado});
}

module.exports = AutenticacionController;