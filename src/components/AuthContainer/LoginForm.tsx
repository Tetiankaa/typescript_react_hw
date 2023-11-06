import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";

const LoginForm = () => {
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();
    const {setIsAuth, setMyData} = useAppContext();

    const {register,handleSubmit} = useForm<IUser>();

    const loginUser:SubmitHandler<IUser> = async (user)=>{
        try {
            await authService.login(user);
           const {data}  = await authService.myData();
           setMyData(data);
           setIsAuth(true);
            setServerError(null);
            navigate('/cars');
        }catch (e:any){
            setServerError(e.response.data);
        }
    }
    return (
        <form onSubmit={handleSubmit(loginUser)}>
            {serverError && <p>Username or password is incorrect</p>}
            <div>Username: <input type="text" {...register('username')}/></div>
            <div>Password: <input type="text" {...register('password')}/></div>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};