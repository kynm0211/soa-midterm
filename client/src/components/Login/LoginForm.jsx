import React from 'react';
import './LoginForm.css';
import { postRequest } from '../../utils/services';
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
    const navigate = useNavigate();
    const navTableList = () => {
        navigate('/table')
    }

    const sendReq = (e) => {
        e.preventDefault();
        postRequest('users/login', {
            username: document.getElementsByName('username')[0].value,
            password: document.getElementsByName('password')[0].value
        }).then((res) => {
            if (res.statusCode === 0) {
                console.log(res);
            } else {
                console.log(res);
            }
        });
    };
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
                    <button onClick={(e) => sendReq(e)}>LOGIN</button>
                </div>

            </form>
        </div>
    )  
}