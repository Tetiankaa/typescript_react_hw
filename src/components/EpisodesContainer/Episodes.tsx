import React, {useEffect, useState} from 'react';
import {episodeServices} from "../../services";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {

    const [episodes, setEpisodes] = useState({next:null, prev:null, results:[]});
    const [query, setQuery] = useSearchParams({page: '1'});
    const page: string = query.get('page') || '1';


    //
    // useEffect(() => {
    //     episodeServices.getAll(page)
    //         .then((response) => {
    //             // @ts-ignore
    //             const { data: { info: { next, prev }, results } } = response;
    //             setEpisodes({ next, prev, results });
    //         })
    //
    // }, [page]);

    useEffect(() => {
        episodeServices.getAll(page).then(({data:{info:{next, prev}, results}})=>setEpisodes({next,prev,results}))

    }, [page]);


    return (
        <div>

        </div>
    );
};

export {Episodes};