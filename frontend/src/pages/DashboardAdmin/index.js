import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import api from '../../services/api'

export default function DashboardUsu({history}){
    const [dados, setDados]=useState([]);
    const [id, setId]=useState('');

    
    async function ativar(_id){
        const nivelAcesso=1;

        await api.put('/modificarAcesso', {status:nivelAcesso}, {
            headers:{_id}
        });

        window.location.reload();

    }
    async function desativar(_id){
        const nivelAcesso=0;
        await api.put('/modificarAcesso', {status:nivelAcesso}, {
            headers:{_id}
        });
        window.location.reload();
    }
    function editar(_id){
        localStorage.setItem('admin',_id);
       
        history.push('/AdminEdit');

    }
    function sair(){
        history.push('/');
    }




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
                <li className="indices">
                <h1>Nome</h1>
                <h1>CPF</h1>
                <h1>E-mail</h1>
                <h1 className="nivelAcesso">Status</h1>
                </li>
        
            {
                dados.map(dado=>(
                <li key={dado._id}>
                        <header className="imagem" style={{
                            backgroundImage: `url(${dado.imgPerfil_url})`
                        }}/>
                        <h1>{dado.nome}</h1>
                        <h1>{dado.cpf}</h1>
                        <h1>{dado.email}</h1>
                        <h1 className="nivelAcesso">{dado.nivelAcesso}</h1>
                    
                        <button className="ativar" onClick={() => ativar(dado._id)}>Ativar</button>
                        <button className="desativar" onClick={() => desativar(dado._id)}>Desativar</button>
                        <button className="editar" onClick={() => editar(dado._id)}>Editar</button>
                    
                    </li>
                    
                    ))
                    }
                    <button className="Sair" onClick={sair}> Sair </button>
            </ul>
    </div>
    );
}