import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, []);

    const login = async (email, password) => {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/login`, { email, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setUser(decoded);
    };

    const register = async (formData) => {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/register`, formData);
        const { token } = response.data;
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setUser(decoded);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, register, logout, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
