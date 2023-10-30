import React, {useEffect, useState} from 'react';
import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";

const UserContainer = () => {
    // const [flag, setFlag] = useState<boolean>(false);

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};