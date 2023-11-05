import {IRes} from "../types/IResType";
import {ICharacter} from "../interfaces/characterInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const characterService = {
    getAll:(ids:string):IRes<ICharacter[]>=>axiosService.get(urls.character.byIds(ids))
}
export {characterService}