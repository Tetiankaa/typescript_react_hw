import {IResponse, jsonService} from "./jsonService";
import {IPost} from "../interfaces/postInterface";
import {urls} from "../constants/urls";

const postService = {
    getAll:():IResponse<IPost[]>=>jsonService.get(urls.posts.base),
    getById:(id:number):IResponse<IPost> => jsonService.get(urls.posts.byId(id))
}

export {postService}