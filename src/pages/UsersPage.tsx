import React from 'react';
import {Users} from "../components/UserContainer/Users";
import {useLoaderData} from "react-router-dom";
import {IUser} from "../interfaces/userInterface";


const UsersPage= () => {
    const {data} = useLoaderData() as {data:IUser[]};
    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export {UsersPage};