import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { slice , setApi } from "./api";


export type AppStore = typeof store;


const reducers = combineReducers({
    one: slice.reducer ,
    [setApi.reducerPath] : setApi.reducer
})

export const store = configureStore({
    reducer: reducers ,
    middleware: (ids) => ids().concat(setApi.middleware)
})

export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>
export type TypeArhivRedusers = ReturnType<typeof reducers>