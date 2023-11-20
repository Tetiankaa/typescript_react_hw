import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {EpisodePagination, Episodes} from "../components";
import {useAppDispatcher, useAppSelector} from "../hooks";
import {episodeActions} from "../redux";

const EpisodesPage = () => {

    const [query, setQuery] = useSearchParams();
    const page = query.get('page');

    const dispatch = useAppDispatcher();
    const {error} = useAppSelector(state => state.episodes);

    useEffect(() => {
        if (!page){
            setQuery({page:'1'});
        }
        dispatch(episodeActions.setCurrentEpisode(null))
    }, [dispatch]);

    return (
        <div>
            {error && <h1>{JSON.stringify(error)}</h1>}
            <Episodes page={page}/>
            <EpisodePagination/>
        </div>
    );
};

export {EpisodesPage};