import React from 'react';
import './LoginForm.css';

export default function LoginForm() {
    return (
        <div className='login-box'>
            <h1>welcome</h1>
            <form>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Please enter username" />
                <label>Password:</label>
                <input type="password" name="password" placeholder="Please enter password" />
                <button>LOGIN</button>
            </form>
        </div>
    )
}