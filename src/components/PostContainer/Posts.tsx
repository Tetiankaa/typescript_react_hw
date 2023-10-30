import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../interfaces/IPostInterface";
import {postService} from "../../services/postService";
import {Post} from "./Post";

interface IProps {
    postId:number
}
const Posts:FC<IProps> = ({postId}) => {
    const [post, setPost] = useState<IPost>(null);

    useEffect(() => {
        postService.getById(postId).then(({data})=>setPost(data))
    }, [postId]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};