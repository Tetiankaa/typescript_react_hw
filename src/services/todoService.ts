import {IRes} from "../types/IResType";
import {ITodo} from "../interfaces/ITodoInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const todoService = {
    getAll:():IRes<ITodo[]>=>axiosService.get(urls.todos)
}
export {todoService}