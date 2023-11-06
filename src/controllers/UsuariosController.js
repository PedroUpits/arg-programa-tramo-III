const UsuarioModel = require('./../models/UsuarioModel');

const UsuariosController = {}

const lista_usuarios = [
        { nombre: 'Juan' },
        { nombre: 'Carlos' },
];

UsuariosController.verUsuarios = async (req,res) => {
    try {
    const listaUsuarios = await UsuarioModel.findAll();

    return res.json(lista_usuarios);
} catch (error) {
UsuariosController.verUsuario = (req,res) => {
    return res.json(500).json({
        mensaje: 'Ocurrio un error interno',
        error: error
    });
}
}
}

UsuariosController.crearUsuario = (req,res) => {
    return res.json(lista_usuarios);
}

UsuariosController.crearUsuario = (req,res) => {
    return res.json(lista_usuarios);
}

module.exports = UsuariosController;