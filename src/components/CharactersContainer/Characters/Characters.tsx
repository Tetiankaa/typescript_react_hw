import React, {useEffect, useState} from 'react';
import {ICharacters} from "../../../interfaces/charactersInterface";
import {characterService} from "../../../services/characterService";
import {Character} from "../Character/Character";
import {CharacterDetails} from "../CharacterDetails/CharacterDetails";

const Characters = () => {
    const [characters, setCharacters] = useState<ICharacters[]>([]);

    const [character, setCharacter] = useState<ICharacters>(null)

    useEffect(()=>{
        characterService.getByIds([1,2,3,4,5,6]).then(({data}) => setCharacters(data))
    },[])

    const onClick = async (id:number)=>{
        const {data} = await characterService.getById(id);
        setCharacter(data);
    }

    return (
        <div>
            {character && <CharacterDetails characterDetails={character}/>}
            {characters.map(character=> <Character key={character.id} character={character} onClick={onClick}/>)}

        </div>
    );
};

export {Characters};