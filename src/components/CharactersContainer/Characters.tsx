import React, {useEffect, useState} from 'react';
import {ICharacter} from "../../interfaces";
import {useLocation} from "react-router-dom";
import {characterService} from "../../services";
import {Character} from "./Character";

const Characters = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const {state:{ids}} = useLocation();

    useEffect(() => {
        characterService.getAll(ids).then(({data})=>setCharacters(data))
    }, [ids]);
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};