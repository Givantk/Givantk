import React from 'react'
import Login from '../pages/Login'


import {Route} from 'react-router-dom'


function LoginContainer() {
    return (
        <div>
                <Route path="/login" component={Login}/>
         
        </div>
    )
}

export default LoginContainer
