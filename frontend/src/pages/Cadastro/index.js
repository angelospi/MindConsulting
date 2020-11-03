import React, {useState, useMemo} from 'react';

import api from '../../services/api'

import './styles.css'

export default function Cadastro({ history }){
    

    const [nome, setNome]= useState('');
    const [email, setEmail]= useState('');
    const [cpf, setCpf]= useState('');
    const [senha, setSenha]= useState('');
    const [imgPerfil, setImgPerfil]= useState(null);

    async function cancelar(){
        history.push('/');
    }

    const preview=useMemo(()=>{
        return imgPerfil ? URL.createObjectURL(imgPerfil):null;
    },[imgPerfil])

    async function handleSubmit(event){
        event.preventDefault()
         
        
        const data = new FormData();
        data.append('nome',nome);
        data.append('email',email);
        data.append('cpf',cpf);
        data.append('senha',senha);
        data.append('imgPerfil',imgPerfil);

        await api.post('/cadastro', data);

        history.push('/');
    }


    return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <label id="imgPerfil" style={{backgroundImage: `url(${preview})` }}
            className={imgPerfil ? 'tem-imgPerfil': ''}>
                <input type="file"
                onChange={event=>setImgPerfil(event.target.files[0])} />
            </label>
            <input 
            id="nome"
            placeholder="Informe seu nome completo"
            value={nome}
            onChange={event=>setNome(event.target.value)}
            />

            <input
            id="email"
            placeholder="Informe seu e-mail"
            value={email}
            onChange={event=>setEmail(event.target.value)}/>
            
            <input  
            id="cpf"
            placeholder="Informe seu CPF"
            value={cpf}
            onChange={event=>setCpf(event.target.value)}/>

            <input
            id="senha"
            placeholder="Digite uma senha"
            value={senha}
            onChange={event=>setSenha(event.target.value)}/> 
            <button className="cadastrar" type="submit">Cadastrar</button>
            <button className="cancelar" onClick={cancelar}>Cancelar</button>
        </form>
        
        
    </div>
    );
};
