import React, { createContext, useState, useContext } from 'react';

// Tạo context
const AuthContext = createContext();

// Tạo Provider cho AuthContext
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Kiểm tra local storage để xem người dùng có đang đăng nhập không
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái vào local storage
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn'); // Xóa trạng thái khỏi local storage
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook để sử dụng AuthContext
export const useAuth = () => useContext(AuthContext);
