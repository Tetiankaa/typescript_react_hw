import {IConfirmLogin} from "./confirmLoginInterface";
import {ISetState} from "../types/ISetStateType";

export interface IAppContext {
        state:IConfirmLogin,
        setState:ISetState<IConfirmLogin>
}