import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../interfaces/commentInterface";
import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";

interface IProps {
    postId:string
}
const Comments:FC<IProps> = ({postId}) => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll(postId).then(({data})=>setComments(data))
    }, [postId]);
    return (
             <div>
                 {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
    );
};

export {Comments};