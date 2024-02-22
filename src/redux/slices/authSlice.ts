import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {IAuth, IUser} from "../../interfaces";
import {authService} from "../../services";

interface IState {
    userInfo:IUser,
    error:string,
    isLoading:boolean
}
const initialState:IState = {
    userInfo:null,
    error:null,
    isLoading:null
}

const login = createAsyncThunk<IUser,{credentials:IAuth}>(
    'authSlice/login',
            async ({credentials},{rejectWithValue})=>{
        try {
            return await authService.login(credentials);
        }catch (e) {
            return rejectWithValue(e)
        }
            }
)

const getUserInfo = createAsyncThunk<IUser,void>(
    'authSlice/getUserInfo',
            async (_,{rejectWithValue})=>{
        try {
          const {data} = await authService.getUserInfo();
          return  data
        }catch (e) {
            return rejectWithValue(e)
        }
            }
)
const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })
            .addMatcher(isPending(login,getUserInfo),state => {
                state.isLoading = true;
            })
            .addMatcher(isRejected(login,getUserInfo), (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addMatcher(isFulfilled(login,getUserInfo), state => {
                state.isLoading = false;
                state.error = null;
            })
});

const {reducer:authReducer, actions} = authSlice;

const authActions = {...actions,login, getUserInfo};

export {
    authSlice,
    authActions,
    authReducer
}