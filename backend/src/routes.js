const express = require ('express');
const crypto = require('crypto');
const multer = require('multer');
const uploadConfig=require('./config/upload');

const UsuarioController = require('./controllers/UsuarioController');


const routes = express.Router();
const upload=multer(uploadConfig);

routes.get('/usuarios', UsuarioController.index);


routes.post('/cadastro',upload.single('imgPerfil'), UsuarioController.store);


module.exports= routes;