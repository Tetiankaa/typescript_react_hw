import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IEpisode, IResponse} from "../../interfaces";
import {episodeService} from "../../services";

interface IState {
    episodes: IEpisode[],
    currentEpisode:string,
    isLoading:boolean,
    error:string | null,
    prevPage:string,
    nextPage:string
}

const initialState: IState = {
    episodes: [],
    currentEpisode:null,
    error:null,
    isLoading:null,
    prevPage:null,
    nextPage:null
}

const getAll = createAsyncThunk<IResponse, { page: string }>(
    'episodeSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)
const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setCurrentEpisode:(state, action)=>{
            state.currentEpisode = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info:{next, prev}, results} = action.payload;
                state.episodes=results;
                state.prevPage=prev;
                state.nextPage=next;
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.isLoading = false;
                state.error = null;
            })
            .addMatcher(isPending(getAll),state => {
                state.isLoading = true;
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })

})

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeActions = {...actions, getAll};

export {
    episodeActions,
    episodeReducer,
    episodeSlice
}