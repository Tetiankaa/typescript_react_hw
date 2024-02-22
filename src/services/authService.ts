import {IAuth, ITokens, IUser} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";

const accessToken = 'access';
const refreshToken = 'refresh';

const authService = {
    register(credentials:IAuth):IRes<IUser>{
        return apiService.post(urls.auth.register, credentials)
    },
    getUserInfo():IRes<IUser>{
        return apiService.get(urls.auth.info)
    },
    async login(credentials:IAuth):Promise<IUser>{
        const {data} = await apiService.post(urls.auth.login, credentials);
        this.setTokens(data);

        const {data:userInfo} = await this.getUserInfo();
        return userInfo;
    },
    setTokens({access, refresh}:ITokens):void{
        localStorage.setItem(accessToken,access);
        localStorage.setItem(refreshToken,refresh);
    },
    getAccessToken():string{
        return localStorage.getItem(accessToken);
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshToken);
    },
    removeTokens():void{
        localStorage.removeItem(accessToken);
        localStorage.removeItem(refreshToken);
    },
    async refresh():Promise<void>{
        const token = this.getRefreshToken();
       const {data} = await apiService.post(urls.auth.refresh,{refresh:token});
       this.setTokens(data);
    }

}

export {
    authService
}