import {IRes} from "../types/IResType";
import {IPost} from "../interfaces/postInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll:(userId:string):IRes<IPost[]>=>axiosService.get(urls.posts.base,{params:{userId}}),
    getById:(id:string):IRes<IPost>=>axiosService.get(urls.posts.byId(id))
}

export {postService}