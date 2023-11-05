import React from 'react';
import css from './Header.module.css';
import {UseAppContext} from "../../hooks";

const Header = () => {

    const {episode} = UseAppContext();

    return (

            <div className={css.Header}>
                {
                    episode
                        ? <h1>{episode}</h1>
                        : <h1>Rick & Morty</h1>
                }
            </div>



    );
};

export {Header};