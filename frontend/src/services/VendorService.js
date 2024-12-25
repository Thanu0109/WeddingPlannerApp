import axios from 'axios';

const API_URL = 'http://localhost:5000/vendor'; // API Gateway URL for VendorService

export const getVendors = () => axios.get(`${API_URL}/GetVendors0015`);
export const addVendor = (vendor) => axios.post(`${API_URL}/AddVendor0015`, vendor);
export const updateVendor = (id, vendor) => axios.put(`${API_URL}/UpdateVendor0015/${id}`, vendor);
export const deleteVendor = (id) => axios.delete(`${API_URL}/DeleteVendor0015/${id}`);
