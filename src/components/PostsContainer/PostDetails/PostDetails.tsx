import React, {FC} from 'react';
import {IPost} from "../../../interfaces/postInterface";

interface IProps{
    post:IPost
}
const PostDetails:FC<IProps> = ({post}) => {
    const {id,title,userId,body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>userId: {userId}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};