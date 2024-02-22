import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../redux";


const LoginForm = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const {error,isLoading} =  useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login = async (user:IAuth) =>{
        await dispatch(authActions.login({credentials:user}));
        navigate('/cars');
    }
    return (
        <form onSubmit={handleSubmit(login)}>
            {isLoading && <h1>loading...</h1>}
            {error && <h1>{error}</h1>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="password" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};