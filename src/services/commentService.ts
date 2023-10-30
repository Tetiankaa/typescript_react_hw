import {IRes} from "../types/IResType";
import {IComment} from "../interfaces/ICommentInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:():IRes<IComment[]>=>axiosService.get(urls.comments)
}
export {commentService}