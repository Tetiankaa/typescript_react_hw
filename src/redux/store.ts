import {configureStore} from "@reduxjs/toolkit";

import {episodeReducer} from "./slices";
import {characterReducer} from "./slices/characterSlice";

const store = configureStore({
    reducer:{
        episodes:episodeReducer,
        characters:characterReducer
    }
})

export {
    store
}