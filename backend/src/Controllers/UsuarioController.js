const { response } = require('express');
const { connect, connection } = require('mongoose');
const Usuario= require('../models/Usuario');


module.exports ={
    async store(req, res){
        const {nome, cpf, email, senha} = req.body;
        const{imgPerfil}=req.file;
        const nivelAcesso=0;

        const usuario= await Usuario.create({
            nome,
            cpf,
            email,
            senha,
            imgPerfil,
            nivelAcesso
        });


        return res.json(usuario);
    },

    async index(req, res){
        
        const lista_usuario = await Usuario.find({});
        
        return res.json(lista_usuario);
    }
};