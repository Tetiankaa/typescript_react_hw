import React, {useEffect, useState} from 'react';
import {episodeServices} from "../../services";
import {useSearchParams} from "react-router-dom";
import {IEpisode, IInfo} from "../../interfaces";
import {Episode} from "./Episode";
import css from './Episodes.module.css';

const Episodes = () => {

    const [episodes, setEpisodes] = useState<IEpisode[]>([]);

    const [prevNext, setPrevNext] = useState<IInfo>({prev: null, next: null})

    const [query, setQuery] = useSearchParams({page: '1'});
    const page: string = query.get('page') || '1';


    useEffect(() => {
        episodeServices.getAll(page).then(({data}) => {
            setEpisodes(data.results);
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })
    }, [query]);


    const prev = (): void => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`);
            return prev;
        })
    }
    const next = (): void => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`);
            return prev;
        })
    }

    return (
        <>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.Buttons}>
                <button onClick={prev} disabled={!prevNext.prev}>prev</button>
                <button onClick={next} disabled={!prevNext.next}>next</button>
            </div>
        </>
    );
};

export {Episodes};