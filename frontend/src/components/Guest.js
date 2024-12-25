import React, { useState, useEffect } from 'react';
import { getGuests, addGuest, deleteGuest } from '../services/GuestService';

const Guest = () => {
    const [guests, setGuests] = useState([]);
    const [newGuest, setNewGuest] = useState({ name: '', email: '' });

    useEffect(() => {
        getGuests().then((res) => setGuests(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addGuest(newGuest).then(() => {
            getGuests().then((res) => setGuests(res.data));
        });
    };

    return (
        <div>
            <h1>Guest List</h1>
            <ul>
                {guests.map((guest) => (
                    <li key={guest.id}>
                        {guest.name} ({guest.email})
                        <button onClick={() => deleteGuest(guest.id).then(() => {
                            getGuests().then((res) => setGuests(res.data));
                        })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Guest Name"
                    value={newGuest.name}
                    onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Guest Email"
                    value={newGuest.email}
                    onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
                />
                <button type="submit">Add Guest</button>
            </form>
        </div>
    );
};

export default Guest;
