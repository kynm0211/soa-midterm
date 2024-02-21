import React from 'react';
import '../../components/Login/LoginForm.css';
import LoginForm from '../../components/Login/LoginForm'
// import Footer from '../../components/Footer/footer'
import { Helmet } from 'react-helmet'

export default function Login() {
    return (
        <div className='login-container'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm></LoginForm>
        </div>

    )
}
