import {IRes} from "../types/IResType";
import {IUser} from "../interfaces/userInterface";
import {axiosServiceJson} from "./axiosServiceJson";
import {urls} from "../constants/urls";

const userService = {
        getAll:():IRes<IUser[]>=>axiosServiceJson.get(urls.users),
        create:(data:IUser):IRes<IUser>=>axiosServiceJson.post(urls.users, data)
}
export {userService}