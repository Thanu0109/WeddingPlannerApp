import React, { useState, useEffect } from 'react';
import { getTasks, addTask, deleteTask } from '../services/TaskService';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', status: '' });

    useEffect(() => {
        getTasks().then((res) => setTasks(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask).then(() => {
            getTasks().then((res) => setTasks(res.data));
        });
    };

    return (
        <div>
            <h1>Task Management</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.description} (Due: {task.dueDate}, Status: {task.status})
                        <button onClick={() => deleteTask(task.id).then(() => {
                            getTasks().then((res) => setTasks(res.data));
                        })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Task Title" 
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <input 
                    type="date" 
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Status (e.g., Pending, Completed)" 
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default Task;
