import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/mind.jpg'

import api from '../../services/api'

import './styles.css'

export default function Login({ history }){

    const [cpf, setCpf]= useState('');
    const [senha, setSenha]= useState('');

    async function handleSubmit(event){
        event.preventDefault()
         
        const response=await api.post('/login', {
            cpf,
            senha
        });
        const {_id, nivelAcesso} = response.data
        
        if(nivelAcesso===0){
            console.log("Seu usuário encontra desativado");

        }
        else if(nivelAcesso===1){
            localStorage.setItem('user',_id);
            history.push('/DashboardUsu');
        }
        else if(nivelAcesso===999){
            history.push('/DashboardAdmin');
        }

    }


    return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit} >
        <img src={logo} alt="Logo"/>
        <h1 className="login">LOGIN</h1>
            
                <input 
                id="cpf"
                placeholder="Informe seu CPF"
                value={cpf}
                onChange={event=>setCpf(event.target.value)}/>

                <input
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={event=>setSenha(event.target.value)}/> 
                <button type="submit">Entrar</button>
            

            <Link to='/cadastro'>Não tenho cadastro</Link>
        </form>
        
        
    </div>
    );
};