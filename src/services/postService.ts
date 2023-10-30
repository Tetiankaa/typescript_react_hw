import {IRes} from "../types/IResType";
import {IPost} from "../interfaces/IPostInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService ={
    getById:(id:number):IRes<IPost>=>axiosService.get(urls.posts.byId(id))
}
export {postService}