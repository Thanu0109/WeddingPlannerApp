import axios from 'axios';

const API_URL = 'http://localhost:5000/event'; // API Gateway URL for EventService

export const getEvents = () => axios.get(`${API_URL}/GetEvents0015`);
export const createEvent = (event) => axios.post(`${API_URL}/AddEvent0015`, event);
export const updateEvent = (id, event) => axios.put(`${API_URL}/UpdateEvent0015/${id}`, event);
export const deleteEvent = (id) => axios.delete(`${API_URL}/DeleteEvent0015/${id}`);
