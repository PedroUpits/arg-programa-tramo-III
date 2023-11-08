const usuarioRouter = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/UsuariosController.js');
const {
    verUsuarios: verUsuariosMongoose, 
    crearUsuario: crearUsuarioMongoose,
    editarUsuario: editarUsuarioMongoose,
    eliminarUsuario: eliminarUsuarioMongoose, 
    verUsuario: verUsuarioMongoose,
} = require('./../controllers/mongoose/UsuariosController.js');

//ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);

//ver usuario
usuarioRouter.get('/usuario', verUsuario);

//crear usuario
usuarioRouter.post('/usuario', crearUsuario);

//editar usuario
usuarioRouter.put('/usuario', editarUsuario);

//eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);

/*############################################*/

//Ver usuarios (Mongoose)
usuarioRouter.get('/m/usuarios', verUsuariosMongoose);

//ver usuario (Mongoose)
usuarioRouter.get('/m/usuario', verUsuarioMongoose);

//crear usuario (Mongoose)
usuarioRouter.post('/m/usuario', crearUsuarioMongoose);

//editar usuario (Mongoose)
usuarioRouter.put('/m/usuario', editarUsuarioMongoose);

//eliminar usuario (Mongoose)
usuarioRouter.delete('/m/usuario', eliminarUsuarioMongoose);

module.exports = usuarioRouter;