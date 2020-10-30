const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    cpf: Number,
    email: String,
    senha: String,
    imgPerfil:String,
    nivelAcesso: Number
});

UsuarioSchema.pre('save', async function(next){
    const hash= await bcrypt.hash(this.senha,10);
    this.senha = hash;

    next();
});

module.exports = mongoose.model('Usuario', UsuarioSchema)