import axios, {AxiosResponse} from "axios";
import {baseJSON} from "../constants/urls";

export const jsonService = axios.create({baseURL:baseJSON});

export type IResponse<T> = Promise<AxiosResponse<T>>