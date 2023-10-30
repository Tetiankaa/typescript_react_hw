import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/commentInterface";
import {commentService} from "../../services/commentService";
import {Comments} from "./Comments";
import {CommentForm} from "./CommentForm";

const CommentContainer = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll().then(({data})=>setComments(data))
    }, []);

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
          <Comments comments={comments}/>
        </div>
    );
};

export {CommentContainer};