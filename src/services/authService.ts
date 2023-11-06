import {IUser} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const authService = {
    register(data: IUser) {
        return axiosService.post(urls.auth.register, data)
    },
    async login(data: IUser) {
        const {data: {access}} = await axiosService.post(urls.auth.login, data);
        this.setToken(access);
    },
    myData() {
        return axiosService.get(urls.auth.myData)
    },
    setToken(token: string) {
        localStorage.setItem('token', token)
    },
    getToken() {
        return localStorage.getItem('token')
    },
    removeToken() {
        localStorage.removeItem('token')
    }
}

export {authService}