const UsuariosController = {}

const lista_usuarios = [
        { nombre: 'Juan' },
        { nombre: 'Carlos' },
];

UsuariosController.verUsuarios = (req,res) => {
    return res.json(lista_usuarios);
}

UsuariosController.verUsuario = (req,res) => {
    return res.json(lista_usuarios);
}


UsuariosController.crearUsuario = (req,res) => {
    return res.json(lista_usuarios);
}

UsuariosController.crearUsuario = (req,res) => {
    return res.json(lista_usuarios);
}

module.exports = UsuariosController;