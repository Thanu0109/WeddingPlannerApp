import React, { useState, useEffect } from 'react';
import { getEvents, createEvent } from '../services/EventService';

const Event = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ name: '', date: '', venue: '', type: '' });

    useEffect(() => {
        getEvents().then((res) => setEvents(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createEvent(newEvent).then(() => {
            getEvents().then((res) => setEvents(res.data));
        });
    };

    return (
        <div>
            <h1>Wedding Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>{event.name}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Event Name" onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default Event;
