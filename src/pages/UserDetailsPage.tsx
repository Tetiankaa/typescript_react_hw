import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {UserDetails} from "../components/UserContainer/UserDetails";
import {IUser} from "../interfaces/userInterface";
import {userService} from "../services/userService";

const UserDetailsPage = () => {
    const {userId} = useParams();
    const [user, setUser] = useState<IUser>(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state.user){
            setUser(state.user)
        }else {
            userService.getById(userId).then(({data})=>setUser(data))
        }
    }, [userId]);

    return (
        <div>
            {user && <UserDetails user={user}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};