import React, { SetStateAction } from 'react'

export interface Todo {
    id: string;
    text: string;
}

export interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
}

export type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
    setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}