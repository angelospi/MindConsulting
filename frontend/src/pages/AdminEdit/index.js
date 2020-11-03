import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './stylesAdmin.css'

import api from '../../services/api'

export default function Login({history}){
    const [dados, setDados]=useState({});
    const [nome, setNome]=useState('');
    const [email, setEmail]=useState('');
    const [cpf, setCpf]=useState('');
    const _id = localStorage.getItem('admin');

    function cancelar(){
        history.push('/DashboardAdmin');

    };
    async function atualizar(event){
        event.preventDefault()
        await api.put('/modificar',{nome, email, cpf}, {
            headers: {_id}
        });

        history.push('/DashboardAdmin');

    }

    

    useEffect(()=>{
        async function DadosUsu(){
            
            const response = await api.get('/dashboardUsuario',{
                headers:{_id}
            });
            
            setDados(response.data);
            
            
        }
        DadosUsu();
        
    }, []);

    

    return(
        <div className="editar">
            <form>
                <div className="form-group">
                    <h1>Nome:</h1>
                    
                    <input 
                    value={nome}
                    placeholder={dados.nome}
                    onChange={event=>setNome(event.target.value)}/>
                </div>

                <div className="form-group">
                    <h1>CPF:</h1>
                    <input value={cpf}
                    placeholder={dados.cpf}
                    onChange={event=>setCpf(event.target.value)}/>
                </div>

                <div className="form-group">
                    <h1>E-mail:</h1>
                    <input value={email}
                    placeholder={dados.email}
                    onChange={event=>setEmail(event.target.value)}/>
                </div>
                
                <div className="group-button">
                    <button onClick={atualizar}>Atualizar</button>
                    <button onClick={cancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
    
}