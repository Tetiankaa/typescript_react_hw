import React, {useEffect, useState} from 'react';
import {PostDetails} from "../components/PostContainer/PostDetails";
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../services/postService";
import {Comments} from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state.post){
            setPost(state.post)
        }else {
            postService.getById(postId).then(({data})=>setPost(data))
        }
    }, [postId]);
    return (
        <div>
            {post && <PostDetails post={post}/>}
            <Comments postId={postId}/>
        </div>
    );
};

export {PostDetailsPage};