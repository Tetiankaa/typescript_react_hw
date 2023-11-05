import {IRes} from "../types";
import {ICharacter} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const characterService = {
    getAll:(ids:string):IRes<ICharacter[]>=>axiosService.get(urls.character.byIds(ids))
}
export {characterService}