import {IRes} from "../types/IResType";
import {IComment} from "../interfaces/commentInterface";
import {axiosServiceJson} from "./axiosServiceJson";
import {urls} from "../constants/urls";

const commentService = {
    getAll:():IRes<IComment[]>=>axiosServiceJson.get(urls.comments),
    create:(data:IComment):IRes<IComment>=>axiosServiceJson.post(urls.comments, data)
}

export {commentService}