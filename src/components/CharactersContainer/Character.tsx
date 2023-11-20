import  {FC} from 'react';
import {ICharacter} from "../../interfaces";

interface IProps {
    character:ICharacter
}
const Character:FC<IProps> = ({character}) => {
    const {id,name,image} = character;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};