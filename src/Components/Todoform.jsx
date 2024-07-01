import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description) {
            addTodo({
                id: Date.now(),
                name,
                description,
                status: 'not_completed'
            });
            setName('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Name"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                required
            />

            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;
