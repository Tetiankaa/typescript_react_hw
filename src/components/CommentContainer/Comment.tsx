import React, {FC} from 'react';
import {IComment} from "../../interfaces/ICommentInterface";
import {useNavigate} from "react-router-dom";

interface IProps {
    comment:IComment
}
const Comment:FC<IProps> = ({comment}) => {
    const {id, postId,name,email,body} = comment;

    const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=>navigate('post',{state: {postId}})}>see post</button>
        </div>
    );
};

export {Comment};