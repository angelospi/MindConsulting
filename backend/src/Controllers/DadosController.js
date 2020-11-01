const Usuario= require('../models/Usuario');
const bcrypt = require('bcrypt')

module.exports={
    async dashboard(req,res){
        const {_id}=req.headers;
        const usuario=await Usuario.findOne({_id})

        return res.json(usuario);
    },
    async modificar(req,res){
        const {_id}=req.headers;
        const {nome, email, cpf}=req.body;

        const usuario = await Usuario.findByIdAndUpdate(_id,{
            nome,
            email,
            cpf
        }, { new:true});


        return res.json(usuario);
    },

    async atualizar_acesso(req,res){
        const {_id}=req.headers;
        const {status}=req.body;
        const usuario=await Usuario.findById(_id);
        
        const nivelAcesso=status;
        
        await Usuario.findByIdAndUpdate(_id,{
            nivelAcesso
        },{new:true});
        return res.json();
    }

};
