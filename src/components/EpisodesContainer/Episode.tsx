import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IEpisode} from "../../interfaces";

interface IProps {
    episode:IEpisode
}
const Episode:FC<IProps> = ({episode}) => {
    const {episode:chapter,id,name,characters} = episode;

    const navigate = useNavigate();

    const showCharacters = () =>{
        const ids = characters.map(character=>character.split('/').slice(-1)[0]).join(',');
        navigate(`/characters/${ids}`, {state:{chapter}});
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>chapetr: {chapter}</div>
            <div>name:{name}</div>
            <button onClick={()=>showCharacters()}>characters</button>
        </div>
    );
};

export {Episode};