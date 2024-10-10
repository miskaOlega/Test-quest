import { createAsyncThunk, createSlice , PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from "axios";

export type TypeJson = {
    id: number | string,
    barcode: number ,
    product_brand: string ,
    product_name: string ,
    product_quantity: number ,
    price: number
};

type InInitialState = {
    data: TypeJson[];
    loading: boolean ,
    errors: boolean
}

const initialState = { data: [] , loading: false , errors: true } satisfies InInitialState as InInitialState;

export const getApi = createAsyncThunk("Api" , async(_, thunk) => {
    try {
        const json = await axios.get("http://localhost:3001/0");
    return json.data
    } catch (error) {
        thunk.fulfillWithValue(error)
    }

})

export const slice = createSlice({
    name: "TableApi" ,
    initialState , 
    reducers: {
        clearReduser: (state , {payload: bool}:PayloadAction<boolean>) => {
            if(bool) {
                state.data = []
                return state
            }
        }
    }, 
    extraReducers: apiInfa => {
        apiInfa.addCase(getApi.pending , state => {state.loading = true})
        .addCase(getApi.fulfilled , (state , action:PayloadAction<TypeJson[]>) => {
            state.loading = false;
            state.data = action.payload
        })
    }
});

export const setApi = createApi({
    reducerPath: "apiQuery" ,
    tagTypes: ["Ram"] ,
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/0"
    }) , 
    endpoints: build => ({
        setApiQuery: build.mutation<TypeJson , Partial<TypeJson>>({
            query: ({id , ...stores}) => ({
                body: stores ,
                url: `/${id}`,
                method: "PUT"
            }) ,
            invalidatesTags: [{type: "Ram" , id: "List"}]           
        })
    })
});

export const {useSetApiQueryMutation} = setApi;