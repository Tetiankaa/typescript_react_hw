import React, {FC} from 'react';
import {ITodo} from "../../interfaces/ITodoInterface";

interface IProps {
    todo:ITodo
}
const Todo:FC<IProps> = ({todo}) => {
    const {id,userId,title,completed} = todo;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed ? 'YES' : 'NOT'}</div>
            <p>-----------------------------</p>
        </div>
    );
};

export {Todo};