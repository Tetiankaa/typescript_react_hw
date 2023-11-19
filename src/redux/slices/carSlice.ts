import {createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";

interface IState {
    cars:ICar[],
    trigger:boolean,
    carForUpdate:ICar
}
const initialState:IState = {
    cars:[],
    trigger:null,
    carForUpdate:null
}
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCars:(state, action)=>{
            state.cars = action.payload;
        },
        setTrigger:state => {
            state.trigger = !state.trigger;
        },
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload;
        }
    }
});

const {reducer:carReducer, actions} = carSlice;

const carActions = {...actions};

export {
    carActions, carReducer, carSlice
}