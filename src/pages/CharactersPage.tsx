import React from 'react';
import {Characters} from "../components";
import {UseAppContext} from "../hooks";
import {useNavigate} from "react-router-dom";

const CharactersPage = () => {
    const {setEpisode} = UseAppContext();
    const  navigate = useNavigate();

    const back = () => {
        navigate(-1);
        setEpisode(false);
    }
    return (
        <div>
            <button onClick={back}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};