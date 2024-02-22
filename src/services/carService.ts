import {IRes} from "../types";
import {IApiResponse, ICar} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll:(page:string):IRes<IApiResponse>=>apiService.get(urls.cars.base,{params:{page}}),
    create:(data:ICar):IRes<ICar>=>apiService.post(urls.cars.base, data),
    updateById:(id:number, data:ICar):IRes<ICar>=>apiService.put(urls.cars.byId(id),data),
    deleteById:(id:number):IRes<void>=>apiService.delete(urls.cars.byId(id)),
    addPhoto:(id:number,photo:FormData):IRes<ICar>=>apiService.put(urls.cars.photo(id),photo)
}

export {
    carService
}