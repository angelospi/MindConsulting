
const Usuario= require('../models/Usuario');
const bcrypt = require('bcrypt')


module.exports ={
    async store(req, res){
        const {nome, cpf, email, senha} = req.body;
        const{filename}=req.file;
        const nivelAcesso=1;

        const usuario= await Usuario.create({
            nome,
            cpf,
            email,
            senha,
            imgPerfil:filename,
            nivelAcesso
        });


        return res.json(usuario);
    },

    async index(req, res){
        
        const lista_usuario = await Usuario.find({});
        
        return res.json(lista_usuario);
    },
    async login(req, res){
        const { cpf, senha }=req.body;
        

        const usuario=await Usuario.findOne({cpf}).select('+senha')
        

        if(!usuario){
            return res.status(400).send({error:'User not found' });
        }
        if(!await bcrypt.compare(senha, usuario.senha)){
            return res.status(400).send({error: 'Senha inválida'})
        }

        res.send(usuario);

    }
};