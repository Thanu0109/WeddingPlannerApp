import axios from 'axios';

const API_URL = 'http://localhost:5000/budget'; // API Gateway URL for BudgetService

export const getBudgets = () => axios.get(`${API_URL}/GetBudgets0015`);
export const addBudget = (budget) => axios.post(`${API_URL}/AddBudget0015`, budget);
export const updateBudget = (id, budget) => axios.put(`${API_URL}/UpdateBudget0015/${id}`, budget);
export const deleteBudget = (id) => axios.delete(`${API_URL}/DeleteBudget0015/${id}`);
