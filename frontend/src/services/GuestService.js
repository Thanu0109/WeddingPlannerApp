import axios from 'axios';

const API_URL = 'http://localhost:5000/guest'; // API Gateway URL for GuestService

export const getGuests = () => axios.get(`${API_URL}/GetGuests0015`);
export const addGuest = (guest) => axios.post(`${API_URL}/AddGuest0015`, guest);
export const updateGuest = (id, guest) => axios.put(`${API_URL}/UpdateGuest0015/${id}`, guest);
export const deleteGuest = (id) => axios.delete(`${API_URL}/DeleteGuest0015/${id}`);
