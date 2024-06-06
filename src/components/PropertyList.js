import React, { useEffect, useState } from 'react';
import { getProperties, deleteProperty } from '../api/propertyApi';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProperties();
            setProperties(result.data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteProperty(id);
        setProperties(properties.filter(property => property._id !== id));
    };

    return (
        <div>
            <h2>Properties</h2>
            <ul>
                {properties.map(property => (
                    <li key={property._id}>
                        <h3>{property.title}</h3>
                        <p>{property.description}</p>
                        <p>{property.price}</p>
                        <button onClick={() => handleDelete(property._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
