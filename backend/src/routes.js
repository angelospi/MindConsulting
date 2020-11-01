const express = require ('express');
const crypto = require('crypto');
const multer = require('multer');
const uploadConfig=require('./config/upload');

const UsuarioController = require('./controllers/UsuarioController');
const DadosController = require('./Controllers/DadosController')


const routes = express.Router();
const upload=multer(uploadConfig);

routes.get('/usuarios', UsuarioController.index);
routes.get('/dashboardUsuario', DadosController.dashboard);



routes.post('/cadastro',upload.single('imgPerfil'), UsuarioController.store);
routes.post('/login',UsuarioController.login);

routes.put('/modificar',DadosController.modificar);
routes.put('/modificarAcesso', DadosController.atualizar_acesso);



module.exports= routes;