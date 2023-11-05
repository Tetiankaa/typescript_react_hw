import React from 'react';
import {Posts} from "../components/PostContainer/Posts";
import {useLoaderData} from "react-router-dom";
import {IPost} from "../interfaces/postInterface";

const PostsTitlesPage = () => {
    const {data} = useLoaderData() as {data:IPost[]};
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export {PostsTitlesPage};