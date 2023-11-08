const UsuarioModel = require('./../../models/mongoose/UsuarioModel.js')

const UsuariosController = {}

//Ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await UsuarioModel.find();

        return res.json(listaUsuarios);
    }  catch (error) {
        return res.status(500).json({
           mensaje: 'Ocurrio un error interno',
           error: error 
        });
    }
}








module.exports = UsuariosController; 