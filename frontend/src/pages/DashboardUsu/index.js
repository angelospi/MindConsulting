import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import api from '../../services/api'

export default function DashboardUsu({history}){
    const [dados, setDados]=useState({});

    async function atualizar(){

        history.push('/atualizar');
    }

    useEffect(()=>{
        async function DadosUsu(){
            const _id = localStorage.getItem('user');
            const response = await api.get('/dashboardUsuario',{
                headers:{_id}
            });
            
            setDados(response.data);
            
        }
        DadosUsu();
        
    }, []);

    

    return (
        <div className="dados">
            <div className="imagem">
                <header className="imagem" style={{
                    backgroundImage: `url(${dados.imgPerfil_url})`
                    }}/>
                </div>
            <div className="form">
                <h1 className= "Nome">Nome:</h1>
                <h1>{dados.nome}</h1>

                <h1 className= "CPF">CPF:</h1>
                <h1>{dados.cpf}</h1>

                <h1 className= "email">E-mail:</h1>
                <h1>{dados.email}</h1>

                <button className="atualizar" onClick={atualizar} type="submit">Atualizar dados</button>
            </div>
            
        </div>
        
    );
}