import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../../interfaces/postInterface";
import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getAll(userId).then(({data})=>setPosts(data))
    }, [userId]);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};