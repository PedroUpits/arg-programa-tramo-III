const UsuarioModel = require('./../models/UsuarioModel');

const UsuariosController = {}

const lista_usuarios = [
        { nombre: 'Juan' },
        { nombre: 'Carlos' },
];

UsuariosController.verUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await UsuarioModel.find();

    return res.json(listaUsuarios);
} catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error interno',
        error: error
    })  
}  

// Ver usuario
UsuariosController.verUsuario = async (req,res) => {
    try {
        const {id} = req.params;

        const usuarioEncontrado = await UsuarioModel.findById(id);

        return res.json(usuarioEncontrado);
    } catch (error) {
    let mensaje = 'Ocurrio un error interno al intentar obtener el usuario',

    if (error.kind === 'ObjectId') {
        mensaje = 'no se pudo encontrar el usuario';
    }
    return res.status(500).json({
        mensaje: mensaje
        error: error
    })  
}
}

// Crear usuario
UsuariosController.crearUsuario = async (req,res) => {
    try{
        const {nombres, apellidos} = req.body

        const nuevoUsuario = new UsuarioModel({
            nombres: nombres,
            apellidos: apellidos,
        })

        await nuevoUsuario.save();

        return res.json({mensaje: 'Usuario creado con exito'});
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error interno al intentar crear el usuario',
            error: error
        })
    } 
}

// Editar usuario
UsuariosController.editarUsuario = async (req,res) => {
    try{
        const {id, nombres, apellidos } = req.body;

        await UsuarioModel.findByIdAndUpdate(
            id, 
            {nombres: nombres, apellidos: apellidos}
            );

        return res.json({mensaje: 'Usuario actualizado con exito'});
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error interno al intentar editar el usuario',
            error: error
        })
}
}

// Eliminar usuario
UsuariosController.eliminarUsuario = async (req,res) => {
    try{
        const {id} = req.body;

        await UsuarioModel.findByIdAndDelete(id); 
           
        return res.json({mensaje: 'Usuario eliminado con exito'});
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error interno al intentar eliminar el usuario',
            error: error
        })
}
}


module.exports = UsuariosController;