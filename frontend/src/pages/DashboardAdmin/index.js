import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import api from '../../services/api'

export default function DashboardUsu({history}){

    const [dados, setDados]=useState([]);


    useEffect(()=>{
        async function DadosUsu(){
            const _id = localStorage.getItem('user');
            const response = await api.get('/usuarios');
            
            setDados(response.data);
            
        }
        DadosUsu();
        
    }, []);

    return (
        <div className="tabela">
            
            <ul className="usuario-list">
                <li>
                <h1>Nome</h1>
                <h1>Status</h1>
                </li>
        
            {
                dados.map(dado=>(
                <li key={dado._id}>
                        <h1>{dado.nome}</h1>
                        <h1>{dado.nivelAcesso}</h1>
                    
                    </li>
                    ))
                    }
            </ul>
    </div>
    );
}