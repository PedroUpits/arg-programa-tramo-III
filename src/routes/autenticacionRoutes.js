const usuarioRouter = require('express').Router();
const {
 autenticar,
 registrar,
 verificarToken,
} = require('./../controllers/AutenticacionController');

autenticacionRouter.post('/autenticar', autenticar);

autenticacionRouter.post('/verificarToken', verificarToken);


module.exports = autenticacionRouter;