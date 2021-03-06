import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import DashboardUsu from './pages/DashboardUsu';
import DashboardAdmin from './pages/DashboardAdmin';
import atualizar from './pages/Update';
import AdminEdit from './pages/AdminEdit'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro"  component={Cadastro}/>
            <Route path="/DashboardAdmin"  component={DashboardAdmin}/>
            <Route path="/DashboardUsu"  component={DashboardUsu}/>
            <Route path="/atualizar"  component={atualizar}/>
            <Route path="/AdminEdit"  component={AdminEdit}/>

        </Switch>
        </BrowserRouter>
    )
}