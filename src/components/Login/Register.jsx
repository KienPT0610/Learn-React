import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

Register.propTypes = {

};

function Register(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/register", { email, password });
            alert(response.data);
            navigate("/auth/login");
        } catch (error) {
            console.error("Registeration erorr!", error);
            alert("Registeration Failed!")
        }
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className='box-input'>

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='email...'
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                <button type='submit'>Register</button>
                <p>Already have an account? <a href="/auth/login">Login</a></p>
            </form>
        </div>
    );
}

export default Register;