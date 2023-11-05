import React, {FC} from 'react';
import {IPost} from "../../interfaces/postInterface";
import {useNavigate} from "react-router-dom";

interface IProps {
    post:IPost
}
const Post:FC<IProps> = ({post}) => {
    const {title,id} = post;
    const navigate = useNavigate();

    return (
        <div>
            <div>{title}</div>
            <button onClick={()=>navigate(`${id}`, {state:{post}})}>details</button>
        </div>
    );
};

export {Post};