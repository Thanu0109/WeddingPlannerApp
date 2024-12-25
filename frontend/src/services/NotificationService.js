import axios from 'axios';

const API_URL = 'http://localhost:5000/notification'; // API Gateway URL for NotificationService

export const getNotifications = () => axios.get(`${API_URL}/GetNotifications0015`);
export const addNotification = (notification) => axios.post(`${API_URL}/SendNotification0015`, notification);
export const updateNotificationStatus = (id, notification) => axios.put(`${API_URL}/UpdateNotificationStatus0015/${id}`, notification);
export const deleteNotification = (id) => axios.delete(`${API_URL}/DeleteNotification0015/${id}`);
