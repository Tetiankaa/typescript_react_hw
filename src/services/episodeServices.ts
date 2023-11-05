import {IRes} from "../types";
import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IApiResponse} from "../interfaces";

const episodeServices = {
    getAll: (page: string): IRes<IApiResponse> =>axiosService.get(urls.episode, {params:{page}})
}


export {episodeServices}