import {axiosService, IRes} from "./axiosService";
import {ICharacters} from "../interfaces/charactersInterface";
import {urls} from "../constants/urls";

const characterService = {
    getByIds:(id:number[]):IRes<ICharacters[]> => axiosService.get(urls.characters.filterCharacters(id)),
    getById:(id:number):IRes<ICharacters> => axiosService.get(urls.characters.filterSingleCharacter(id))
}

export {characterService}