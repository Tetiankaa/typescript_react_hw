import { useContext } from 'react';
import { IConfirmLogin } from '../interfaces';
import {Context} from "../hoc";
import {IAppContext} from "../interfaces";
interface IAppContextX {
    isAuth: boolean | null;
    setIsAuth: (value: boolean | null) => void;
    myData: { username: string | null } | null,
    setMyData:(value:string | null) =>void;
}
const useAppContext = (): IAppContextX => {
    const {state, setState} = useContext(Context) as IAppContext;

    return {
        isAuth: state.isAuth,
        setIsAuth: (value) => setState((prev: IConfirmLogin) => ({ ...prev, isAuth: value })),
        myData:state.myData,
        setMyData: (value) => setState((prev: any) => ({ ...prev, myData: value }))
    };
}

export { useAppContext };
