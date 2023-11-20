import {IRes} from "../types";
import {IResponse} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll:(page:string):IRes<IResponse>=>apiService.get(urls.episodes,{params:{page}})
}

export {episodeService}