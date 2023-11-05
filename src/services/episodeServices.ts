import {IRes} from "../types/IResType";
import {IEpisode} from "../interfaces/episodeInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

// const episodeServices = {
//     getAll: (page: string): IRes<{ data: { info: { next: string, prev: string }, results: IEpisode[] } }> =>
//         axiosService.get(urls.episode, { params: { page } })
// }
const episodeServices = {
    getAll: (page: string): IRes<{ info: { next: string; prev: string; }; results: IEpisode[] }> =>axiosService.get(urls.episode)
}


export {episodeServices}