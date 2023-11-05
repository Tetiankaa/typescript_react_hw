import {IEpisode} from "./episodeInterface";

export interface IApiResponse {
    info:IInfo,
    results: IEpisode[];
}
export interface IInfo{
    next: string | null;
    prev: string | null;
    count?:number;
    pages?:number;
}
