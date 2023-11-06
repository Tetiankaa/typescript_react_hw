import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {IConfirmLogin} from "../interfaces";
import {IAppContext} from "../interfaces";

const Context = createContext<IAppContext | null>(null);
interface IProps extends PropsWithChildren{
}
const ContextProvider:FC<IProps> = ({children}) => {
    const [state, setState] = useState<IConfirmLogin>({isAuth:null, myData:null});
    return (
       <Context.Provider value={{state, setState}}>
           {children}
       </Context.Provider>
    );
};

export {ContextProvider, Context};