import {FC, useEffect} from 'react';

import {useAppDispatcher, useAppSelector} from "../../hooks";
import {episodeActions} from "../../redux";
import {Episode} from "./Episode";

interface IProps{
    page:string
}
const Episodes:FC<IProps> = ({page}) => {
    const {episodes,isLoading} = useAppSelector(state => state.episodes);
    const dispatch =useAppDispatcher();

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page, dispatch]);

    return (
        <div>
            {isLoading && <h1>loading....</h1>}
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};