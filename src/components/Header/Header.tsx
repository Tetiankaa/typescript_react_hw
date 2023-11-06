import React from 'react';
import css from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";
const Header = () => {
    const {myData,isAuth,setMyData,setIsAuth} = useAppContext();
    const navigate = useNavigate();

    const logout = () =>{
        navigate('login');
        setIsAuth(false);
        setMyData(null);
    }
    return (
        <div className={css.Header}>
            <h2>Cars</h2>
            {
                isAuth
                ? <div>{myData?.username}
                    <button onClick={logout}>LogOut</button>
                </div>
                    :  <div><NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>
            }

        </div>
    );
};

export {Header};