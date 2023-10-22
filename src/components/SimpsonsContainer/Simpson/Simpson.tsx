import React, {FC} from 'react';
import {ISimpson} from "../../../interfaces/simpsonInterface";

interface IProps{
    simpson:ISimpson
}
const Simpson:FC<IProps> = ({simpson}) => {
    const {id, name, gender,img} = simpson;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>gender:{gender}</div>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Simpson};