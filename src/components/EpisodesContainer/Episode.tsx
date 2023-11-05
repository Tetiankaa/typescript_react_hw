import React, {FC} from 'react';
import {IEpisode} from "../../interfaces";
import css from './Episodes.module.css';
import {useNavigate} from "react-router-dom";
import {UseAppContext} from "../../hooks";
interface IProps {
    episode:IEpisode
}
const Episode:FC<IProps> = ({episode}) => {

    const {id,name,episode:chapter,characters} = episode;
    const navigate = useNavigate();
    const {setEpisode} = UseAppContext();
    const showCharacters = ()=>{
       const ids=characters.map(character=>character.split('/').slice(-1)[0]).join(',');
        navigate('/characters', {state: {ids}});
        setEpisode(chapter);
    }
    return (
        <div className={css.Episode} onClick={showCharacters}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>chapter: {chapter}</p>
        </div>
    );
};

export {Episode};