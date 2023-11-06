import "./carInterface"
import {ICar} from "./carInterface";
export interface IApiResponse {
    prev:string | null,
    next:string | null,
    items: ICar[]
}