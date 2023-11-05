import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import {UserDetails} from "../components/UserContainer/UserDetails";
import {IUser} from "../interfaces/userInterface";

const UserDetailsPage = () => {
    const {data} = useLoaderData() as {data:IUser}

    return (
        <div>
            {<UserDetails user={data}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};