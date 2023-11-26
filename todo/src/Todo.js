import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [newTodo, setNewTodo] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const handleSubmit = () => {
        setNewTodo([...newTodo, todo]);
        setTodo('');
    };

    const handleDelete = (index) => {
        const filterTodo = newTodo.filter((_, currentIndex) => currentIndex !== index);
        setNewTodo(filterTodo);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    // git config --global user.name "saurabh"
    // git config --global user.email "siddharthtripathi063@gmail.com"

    return (
        <div className={`max-w-md mx-auto mt-8 p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-md shadow-md transition-all duration-500`}>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Todo List</h1>
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 ${darkMode ? 'text-white' : 'text-gray-800'} ${darkMode ? 'bg-gray-600' : 'bg-gray-300'
                        } rounded-full focus:outline-none`}
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className={`border p-2 w-full mb-4 ${darkMode ? 'text-white bg-gray-700' : 'bg-white'}`}
                placeholder="Add a new todo"
            />
            <button
                onClick={handleSubmit}
                className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600`}
            >
                Add
            </button>
            <div className="mt-4">
                {newTodo.map((todo, index) => (
                    <div key={index} className={`flex items-center justify-between border-b py-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                        <span>{index}){todo}</span>
                        <button
                            onClick={() => handleDelete(index)}
                            className={`text-red-500 hover:text-red-700 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;
