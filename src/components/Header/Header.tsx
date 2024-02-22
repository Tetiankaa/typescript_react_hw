import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";
import {useEffect} from "react";


const Header = () => {
    const {userInfo} =  useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = authService.getAccessToken();

        if (token && !userInfo){
            dispatch(authActions.getUserInfo());
        }
    }, [dispatch, userInfo]);
    return (
        <div className={css.Header}>
            {
                userInfo
                    ? <h1>{userInfo.username}</h1>
                    : <div>
                        <NavLink to={'/login'}>Login</NavLink>
                        <NavLink to={'/register'}>Register</NavLink>
                      </div>
            }
        </div>
    );
};

export {Header};