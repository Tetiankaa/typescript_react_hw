import React, {useEffect, useState} from 'react';
import {ITodo} from "../../interfaces/ITodoInterface";
import {todoService} from "../../services/todoService";
import {Todo} from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        todoService.getAll().then(({data})=>setTodos(data))
    }, []);

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};