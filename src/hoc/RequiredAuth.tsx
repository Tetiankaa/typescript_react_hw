import {FC, ReactElement} from "react";
import {authService} from "../services";
import {Navigate} from "react-router-dom";

interface IProps {
    children:ReactElement
}
const RequiredAuth:FC<IProps> = ({children}) => {

    const token = authService.getAccessToken();

    if (!token){
        return <Navigate to={'/login'}/>
    }
    return children
};

export {RequiredAuth};