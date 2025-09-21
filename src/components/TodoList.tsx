import TodoItem from './TodoItem';

interface Todo {
    id: number;
    text: string;
}

interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
    if (todos.length === 0) {
        return <p className="text-center text-gray-500">No tasks yet. Add one!</p>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} task={todo} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default TodoList;
