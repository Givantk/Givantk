import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import auth from '../components/auth';

const ProtectedRoute = (props) => {

    // if user is authenticated go to the route that contains default container
    if (auth.isAuthenticated()===true) {
        return <Route {...props}/>

        //else redirect to login
    } else {
        console.log('Something wrong')
        return <Redirect to="/login"/>;
    }
}

export default ProtectedRoute;
