import React from 'react';
import Login from '../pages/Login'
import DefaultContainer from './DefaultContainer'
import ProtectedRoute from './ProtectedRoute'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Routes=()=>{

    //here we have a path for login which doesn't contain any navbars or so

    // below it there is a protectedRoute called Default container it contains

    // the rest of routes within it , and since the route is protected

    //if a user is not authorized it redirects him to login 

    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/login" component={Login}/>
                <ProtectedRoute path='/' component={DefaultContainer} />

            </Switch>

        </BrowserRouter>

    )
}

export default Routes
