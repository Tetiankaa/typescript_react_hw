import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {IApiResponse, ICar} from "../../interfaces";
import {carService} from "../../services";


interface IState {
    cars:ICar[],
    isLoading:boolean,
    error:string,
    prevPage:string,
    nextPage:string,
    trigger:boolean,
    carForUpdate:ICar
}
const initialState:IState = {
    cars:[],
    isLoading:null,
    error:null,
    prevPage:null,
    nextPage:null,
    trigger:null,
    carForUpdate:null
}
const getAll = createAsyncThunk<IApiResponse,{page:string}>(
    'carSlice/getAll',
            async ({page},{rejectWithValue}) =>{
        try {
            const {data} = await carService.getAll(page);
            return data;
        }catch (e) {
            return rejectWithValue(e);
        }
            }
)

const create = createAsyncThunk<void,{car:ICar}>(
    'carSlice/create',
            async ({car},{rejectWithValue})=>{
        try {
            await carService.create(car);
        }catch (e) {
            return rejectWithValue(e);
        }
            }
)
const updateById = createAsyncThunk<void,{id:number, car:ICar}>(
        'carSlice/updateById',
            async ({id,car},{rejectWithValue})=>{
            try {
                await carService.updateById(id,car);
            }catch (e) {
                return rejectWithValue(e);
            }
            }
)
const deleteById = createAsyncThunk<void,{id:number}>(
        'carSlice/deleteById',
            async ({id},{rejectWithValue})=>{
            try {
                await carService.deleteById(id);
            }catch (e) {
                return rejectWithValue(e);
            }
            }
)
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                const {prev,next,items} = action.payload;
                state.cars = items;
                state.nextPage = next;
                state.prevPage = prev;
            })
            .addMatcher(isPending(getAll,create,updateById,deleteById), state => {
                state.isLoading = true;
            })
            .addMatcher(isRejected(getAll,create,updateById,deleteById), (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addMatcher(isFulfilled(getAll,create,updateById,deleteById), state => {
                state.isLoading = false;
                state.error = null;
            })
            .addMatcher(isFulfilled(create,updateById,deleteById),state => {
                state.trigger = !state.trigger;
            })
})

const {reducer:carReducer, actions} = carSlice;

const carActions = {...actions,getAll,create,updateById,deleteById};

export {
    carSlice,
    carActions,
    carReducer
}