import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {registerValidator} from "../../validators";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors, isValid}} =
        useForm<IUser>({mode:"onBlur", resolver:joiResolver(registerValidator)});

    const registerUser:SubmitHandler<IUser> =async (user) =>{
        try {
            await authService.register(user);
            navigate('login');
            setServerError(null);
        }catch (e:any){
            setServerError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(registerUser)}>
            {serverError && <p>Username already exists. Try again.</p>}
            <div>Username: <input type="text"{...register('username')}/></div>
            {errors.username && <p>{errors.username.message}</p>}
            <div>Password: <input type="text"{...register('password')}/></div>
            {errors.password && <p>{errors.password.message}</p>}
            <div>Confirm password: <input type="text"{...register('re_password')}/></div>
            {errors.re_password && <p>{errors.re_password.message}</p>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};