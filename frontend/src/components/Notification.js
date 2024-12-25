import React, { useState, useEffect } from 'react';
import { getNotifications, addNotification, deleteNotification } from '../services/NotificationService';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const [newNotification, setNewNotification] = useState({ message: '', notificationDate: '', isRead: false });

    useEffect(() => {
        getNotifications().then((res) => setNotifications(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addNotification(newNotification).then(() => {
            getNotifications().then((res) => setNotifications(res.data));
        });
    };

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>
                        {notification.message} (Date: {notification.notificationDate}, Read: {notification.isRead ? 'Yes' : 'No'})
                        <button onClick={() => deleteNotification(notification.id).then(() => {
                            getNotifications().then((res) => setNotifications(res.data));
                        })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Notification Message" 
                    value={newNotification.message}
                    onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                />
                <input 
                    type="date" 
                    value={newNotification.notificationDate}
                    onChange={(e) => setNewNotification({ ...newNotification, notificationDate: e.target.value })}
                />
                <button type="submit">Add Notification</button>
            </form>
        </div>
    );
};

export default Notification;
