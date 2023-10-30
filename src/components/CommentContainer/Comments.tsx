import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/ICommentInterface";
import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll().then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};