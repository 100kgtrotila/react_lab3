import { PiTrash } from "react-icons/pi";
import {useState} from "react";

interface TodoItemProps {
    task: { id: number; text: string };
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-3 transition-all hover:shadow-md">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className={`ml-3 text-lg ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
          {task.text}
        </span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={`Delete task ${task.text}`}
            >
                <PiTrash size={22} />
            </button>
        </li>
    );
};

export default TodoItem;
