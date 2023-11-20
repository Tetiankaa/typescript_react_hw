import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatcher, useAppLocation, useAppSelector} from "../../hooks";
import {characterActions} from "../../redux/slices/characterSlice";
import {Character} from "./Character";
import {episodeActions} from "../../redux";

const Characters = () => {
    const {isLoading,characters} = useAppSelector(state => state.characters);
    const dispatch = useAppDispatcher();

    const {ids} = useParams();
    const {state:{chapter}} = useAppLocation<{chapter:string}>();

    useEffect(() => {
        dispatch(characterActions.getCharacters({ids}));
        dispatch(episodeActions.setCurrentEpisode(chapter))
    }, [ids, dispatch, chapter]);
    return (
        <div>
            {isLoading && <h1>loading...</h1>}
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};