import {IRes} from "../types/IResType";
import {IComment} from "../interfaces/commentInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:(postId:string):IRes<IComment[]>=>axiosService.get(urls.comments, {params:{postId}})
}
export {commentService}