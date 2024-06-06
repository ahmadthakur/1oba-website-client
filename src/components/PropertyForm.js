import React, { useState, useContext } from 'react';
import { createProperty } from '../api/propertyApi';
import { UserContext } from '../context/UserContext';

const PropertyForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const { user } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const property = {
            title,
            description,
            price,
            location,
            imageUrl,
            userId: user.userId
        };
        await createProperty(property);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                required
            />
            <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
                required
            />
            <button type="submit">Create Property</button>
        </form>
    );
};

export default PropertyForm;
