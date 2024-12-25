import React from 'react';
// Existing imports (if any) remain here

// Import newly created components
import Event from './components/Event';          // Handles event management
import Guest from './components/Guest';          // Handles guest management
import Budget from './components/Budget';        // Handles budget management
import Vendor from './components/Vendor';        // Handles vendor management
import Task from './components/Task';            // Handles task management
import Notification from './components/Notification'; // Handles notifications

const App = () => {
    return (
        <div>
            <h1>Wedding Planner Application</h1>

            {/* Render Event Management */}
            <section>
                <h2>Event Management</h2>
                <Event />
            </section>

            {/* Render Guest Management */}
            <section>
                <h2>Guest Management</h2>
                <Guest />
            </section>

            {/* Render Budget Management */}
            <section>
                <h2>Budget Management</h2>
                <Budget />
            </section>

            {/* Render Vendor Management */}
            <section>
                <h2>Vendor Management</h2>
                <Vendor />
            </section>

            {/* Render Task Management */}
            <section>
                <h2>Task Management</h2>
                <Task />
            </section>

            {/* Render Notifications */}
            <section>
                <h2>Notifications</h2>
                <Notification />
            </section>
        </div>
    );
};

export default App;
