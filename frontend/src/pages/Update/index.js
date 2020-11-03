import React, {useState, useEffect} from 'react';


import api from '../../services/api'

import './styles.css'

export default function Login({history}){
    const [dados, setDados]=useState({});
    const [nome, setNome]=useState('');
    const [email, setEmail]=useState('');
    const [cpf, setCpf]=useState('');


    function cancelar(){
        history.push('/DashboardUsu');

    };
    async function atualizar(event){
        event.preventDefault()

        const _id=localStorage.getItem('user');
       

        await api.put('/modificar',{nome, email, cpf}, {
            headers: {_id}
        });

        history.push('/DashboardUsu');

    }

    

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

    

    return(
        <div className="atualizacao">
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