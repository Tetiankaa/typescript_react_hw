import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <h1>Rick & Morty</h1>
        </div>
    );
};

export {Header};