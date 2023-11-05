import React, {FC} from 'react';
import {IPost} from "../../interfaces/postInterface";

interface IProps {
    post:IPost
}
const PostDetails:FC<IProps> = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            <h3>Comments</h3>
        </div>
    );
};

export {PostDetails};