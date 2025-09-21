# Lab 3: To-Do List

## Component Tree and Data Flow

```
graph TD
    App --> TodoApp;
    TodoApp -- state: [todos] --> AddTodoForm;
    TodoApp -- props: todos, onDelete --> TodoList;
    TodoList --> TodoItem;

    subgraph "Data Flow"
        direction LR
        AddTodoForm -- onAddTodo(text) --> TodoApp;
        TodoItem -- onDelete(id) --> TodoApp;
    end
    
    style TodoApp fill:#f9f,stroke:#333,stroke-width:2px
    style TodoItem fill:#ccf,stroke:#333,stroke-width:2px
```