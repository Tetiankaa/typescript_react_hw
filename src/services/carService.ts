import {IRes} from "../types";
import {IApiResponse, ICar} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const carService = {
        getAll:(page:string):IRes<IApiResponse>=>axiosService.get(urls.cars, {params:{page}}),
        create:(data:ICar):IRes<ICar>=>axiosService.post(urls.cars, data)
}
export {carService}