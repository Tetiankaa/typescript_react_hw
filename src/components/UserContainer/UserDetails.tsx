import React, {FC} from 'react';
import {IUser} from "../../interfaces/userInterface";
import {useNavigate} from "react-router-dom";

interface IProps {
    user:IUser
}
const UserDetails:FC<IProps> = ({user}) => {
    const {id, name, username, email, address: {street}} = user;
    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <button onClick={() => navigate('posts')}>Get Posts</button>
        </div>
    );
};

export {UserDetails};