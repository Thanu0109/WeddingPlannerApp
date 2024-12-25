import axios from 'axios';

const API_URL = 'http://localhost:5000/task'; // API Gateway URL for TaskService

export const getTasks = () => axios.get(`${API_URL}/GetTasks0015`);
export const addTask = (task) => axios.post(`${API_URL}/AddTask0015`, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/UpdateTask0015/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/DeleteTask0015/${id}`);
