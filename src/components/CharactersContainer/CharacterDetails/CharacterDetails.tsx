import React, {FC} from 'react';
import {ICharacters} from "../../../interfaces/charactersInterface";
interface IProps{
    characterDetails:ICharacters
}

const CharacterDetails:FC<IProps> = ({characterDetails}) => {
    const {id,name,status,species,gender,image} = characterDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {CharacterDetails};