import {IRes} from "../types/IResType";
import {IUser} from "../interfaces/userInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll:():IRes<IUser[]>=>axiosService.get(urls.users.base),
    getById:(id:string):IRes<IUser>=>axiosService.get(urls.users.byId(id))
}
export {userService}