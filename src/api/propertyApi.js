import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/properties`
});

export const getProperties = () => api.get('/');
export const createProperty = (property) => api.post('/', property);
export const updateProperty = (id, property) => api.put(`/${id}`, property);
export const deleteProperty = (id) => api.delete(`/${id}`);
