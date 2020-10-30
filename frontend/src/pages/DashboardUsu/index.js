import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import api from '../../services/api'

export default function DashboardUsu(){
    const [dados, setDados]=useState({});

    useEffect(()=>{
        async function DadosUsu(){
            const _id = localStorage.getItem('user');
            const response = await api.get('/dashboardUsuario',{
                headers:{_id}
            });
            console.log(response.data)
            setDados(response.data);
            
        }
        DadosUsu();
        
    }, []);

    

    return (
        <div className="dados">
            <header style={{
                backgroundImage: `url(${dados.imgPerfil_url})`
                }}/>
            <p>{dados.nome}</p>
        </div>
        
    );
}