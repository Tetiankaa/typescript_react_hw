import {IRes} from "../types";
import {ICharacter} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    byIds:(ids:string):IRes<ICharacter[]>=>apiService.get(urls.characters.byIds(ids))
}

export {characterService}