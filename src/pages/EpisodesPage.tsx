import React, {useEffect} from 'react';
import {Episodes} from "../components";
import {UseAppContext} from "../hooks";

const EpisodesPage = () => {
        const {setEpisode} = UseAppContext();

    useEffect(() => {
        setEpisode(false)
    }, []);

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};