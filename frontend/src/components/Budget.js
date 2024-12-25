import React, { useState, useEffect } from 'react';
import { getBudgets, addBudget } from '../services/BudgetService';

const Budget = () => {
    const [budgets, setBudgets] = useState([]);
    const [newBudget, setNewBudget] = useState({ totalBudget: '', description: '' });

    useEffect(() => {
        getBudgets().then((res) => setBudgets(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBudget(newBudget).then(() => {
            getBudgets().then((res) => setBudgets(res.data));
        });
    };

    return (
        <div>
            <h1>Budget Management</h1>
            <ul>
                {budgets.map((budget) => (
                    <li key={budget.id}>
                        ${budget.totalBudget}: {budget.description}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Total Budget"
                    value={newBudget.totalBudget}
                    onChange={(e) => setNewBudget({ ...newBudget, totalBudget: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newBudget.description}
                    onChange={(e) => setNewBudget({ ...newBudget, description: e.target.value })}
                />
                <button type="submit">Add Budget</button>
            </form>
        </div>
    );
};

export default Budget;
