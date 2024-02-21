import React from 'react';
import './LoginForm.css';
export default function LoginForm() {
    return (
        <div className='login-box'>
            <h1>welcome</h1>
            <form>
                <div className='user'>
                    <label>Username: </label>
                    <input type="text" name="username" placeholder="Please enter username" />
                </div>

                <div className='pwd'>
                    <label>Password:&ensp;</label>
                    <input type="password" name="password" placeholder="Please enter password" />
                </div>
                <div className='btnLogin'>                
                    <button>LOGIN</button>
                </div>

            </form>
        </div>

    )
}