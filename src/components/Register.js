import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Register = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('buyer');
    const { register } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(fName, lName, email, password, role);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                placeholder="First Name"
                required
            />
            <input
                type="text"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                placeholder="Last Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
