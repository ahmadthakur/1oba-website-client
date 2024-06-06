import React, { useContext } from 'react';
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome, {user ? `${user.fName} ${user.lName}` : 'Guest'}!</h2>
            {user && user.role === 'seller' && (
                <div>
                    <h3>Add a New Property</h3>
                    <PropertyForm />
                </div>
            )}
            <div>
                <h3>Your Properties</h3>
                <PropertyList />
            </div>
        </div>
    );
};

export default Dashboard;
