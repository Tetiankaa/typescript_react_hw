import {IRes} from "../types/IResType";
import {IAlbum} from "../interfaces/IAlbumInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const albumService = {
    getAll:():IRes<IAlbum[]>=>axiosService.get(urls.albums)
}
export {albumService}