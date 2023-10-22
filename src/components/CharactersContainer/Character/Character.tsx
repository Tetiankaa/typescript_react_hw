import React, {FC} from 'react';
import {ICharacters} from "../../../interfaces/charactersInterface";
interface IProps{
    character:ICharacters,
    onClick:(id:number)=>Promise<void>
}
const Character:FC<IProps> = ({character,onClick}) => {
    // const {id,name,status,species,gender,image} = character;
    return (
        <div>
            <div>id: {character.id}</div>
            <div>name: {character.name}</div>
            <div>status: {character.status}</div>
            <div>species: {character.species}</div>
            <div>gender: {character.gender}</div>
            <img src={character.image} alt={character.name}/>
            <button onClick={()=>onClick(character.id)}>More details</button>
        </div>
    );
};

export {Character};