// @ts-ignore
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

interface Todo {
    id: number;
    text: string;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Install Tailwind CSS' },
        { id: 2, text: 'Build a To-Do App' },
        { id: 3, text: 'Create README diagram' },
    ]);

    const handleAddTodo = (text: string) => {
        const newTodo = {
            id: Date.now(),
            text: text,
        };
        setTodos(prevTodos => [newTodo, ...prevTodos]);
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <div className="w-full max-w-xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My To-Do List</h1>
            <AddTodoForm onAddTodo={handleAddTodo} />
            <TodoList todos={todos} onDelete={handleDeleteTodo} />
        </div>
    );
};

export default TodoApp;
