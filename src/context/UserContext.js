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
        const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setUser(decoded);
    };

    const register = async (fName, lName, email, password, role) => {
        const response = await axios.post('http://localhost:5000/api/users/register', { fName, lName, email, password, role });
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
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};
