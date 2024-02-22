import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {IAuth} from "../../interfaces";
import {authValidator} from "../../validators";
import {authService} from "../../services";


const RegisterForm = () => {
    const {register, handleSubmit,formState:{isValid, errors}} = useForm<IAuth>({mode:"onBlur", resolver:joiResolver(authValidator)});
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<boolean>(false);

    const registerUser = async (user:IAuth)=> {
        try {
            await authService.register(user);
            navigate('/login');
            setServerError(false);
        }catch (error) {
            setServerError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            {serverError && <div>Username already exist.</div>}

            <input type="text" placeholder={'Username'} {...register('username')}/>
            {errors.username && <p>{errors.username.message}</p>}
            <input type="password" placeholder={'Password'} {...register('password')}/>
            {errors.password && <p>{errors.password.message}</p>}
            <input type="password" placeholder={'Confirm password'} {...register('re_password')}/>
            {errors.re_password && <p>{errors.re_password.message}</p>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};