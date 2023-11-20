import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {ICharacter} from "../../interfaces";
import {AxiosError} from "axios";
import {characterService} from "../../services";

interface IState {
    characters: ICharacter[],
    isLoading: boolean,
    error: string | null,
}

const initialState: IState = {
    characters: [],
    isLoading: null,
    error: null
}

const getCharacters = createAsyncThunk<ICharacter[], { ids: string }>(
    'characterSlice/getCharacters',
    async ({ids}, {rejectWithValue}) => {
        try {
         const {data} =  await characterService.byIds(ids);
            return  data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data)
        }
    }
)
const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload;
            })
            .addMatcher(isPending(getCharacters),state => {
                state.isLoading = true;
            })
            .addMatcher(isRejected(getCharacters), (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addMatcher(isFulfilled(getCharacters), state => {
                state.isLoading = false;
                state.error = null
            })
})

const {reducer: characterReducer, actions} = characterSlice;

const characterActions = {...actions, getCharacters};

export {
    characterSlice,
    characterActions,
    characterReducer
}