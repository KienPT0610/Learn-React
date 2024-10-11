import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAuth } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

LoginPage.propTypes = {

};


function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/auth/login`, { email, password })
            alert(response.data);
            login();
            navigate("/");

        } catch (error) {
            console.error("Login error: ", error);
            alert("Login failed!");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='box-input'>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='email...'
                    />
                </div>
                <div className='box-input'>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='password...'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Login</button>
                <p>Don't have an account? <a href="/auth/register">Register</a></p>
            </form>
        </div>
    )
}

export default LoginPage;