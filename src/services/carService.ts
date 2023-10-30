import {IRes} from "../types/IResType";
import {ICar} from "../interfaces/carInterface";
import {axiosServiceCars} from "./axiosServiceCars";
import {urls} from "../constants/urls";

const carService = {
    getAll:():IRes<ICar[]>=>axiosServiceCars.get(urls.cars.base),
    create:(data:ICar):IRes<ICar>=>axiosServiceCars.post(urls.cars.base, data),
    update:(id:number, data:ICar):IRes<ICar>=>axiosServiceCars.put(urls.cars.byId(id), data),
    deleteById:(id:number):IRes<void>=>axiosServiceCars.delete(urls.cars.byId(id))
}

export {carService}