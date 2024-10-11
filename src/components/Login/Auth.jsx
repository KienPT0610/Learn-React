import React from 'react';
import Register from './Register';
import LoginPage from './LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './auth.css'

Auth.propTypes = {

};

function Auth(props) {
    return (
        <div className='auth'>
            <div className='auth-container'>
                <Routes>

                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path="/" element={<Navigate to="login" replace />} />
                </Routes>
            </div>
        </div>
    );
}

export default Auth;