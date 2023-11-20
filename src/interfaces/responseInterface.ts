import {IEpisode} from "./episodeInterface";

export interface IResponse{
    info:{
        next:string | null,
        prev:string | null
    },
    results:IEpisode[]
}