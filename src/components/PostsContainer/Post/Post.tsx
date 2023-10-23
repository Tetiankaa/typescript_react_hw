import React, {FC} from 'react';
import {IPost} from "../../../interfaces/postInterface";

interface IProps{
    post:IPost,
    onClick:(id:number)=>void
}
const Post:FC<IProps> = ({ post,onClick}) => {
    const {id, title} = post;

    return (
        <div>
            <h3>ID: {id}</h3>
            <p>TITLE: {title}</p>
            <button onClick={()=>onClick(id)}>More details</button>
        </div>
    );
};

export {Post};