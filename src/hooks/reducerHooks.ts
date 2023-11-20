import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../types";

const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatcher = ()=>useDispatch<AppDispatch>();

export {
    useAppDispatcher,
    useAppSelector
}