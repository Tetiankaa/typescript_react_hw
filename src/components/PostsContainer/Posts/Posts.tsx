import React, {useEffect, useState} from 'react';
import {IPost} from "../../../interfaces/postInterface";
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [post, setPost] = useState<IPost>(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    const onClick = async (postId:number)=>{
        const {data} = await postService.getById(postId);
        setPost(data);
    }
    return (
        <div>
            {post && <PostDetails post={post}/>}
            {posts.map(post=> <Post key={post.id} post={post} onClick={onClick}/>)}
        </div>
    );
};

export {Posts};