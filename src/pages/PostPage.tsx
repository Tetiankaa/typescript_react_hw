import React from 'react';
import {useAppLocation} from "../hooks/useAppLocation";
import {Posts} from "../components/PostContainer/Posts";

const PostPage = () => {
    const {state:{postId}} = useAppLocation<{postId: number}>();

    return (
        <div>
        <Posts postId={postId}/>
        </div>
    );
};

export {PostPage};