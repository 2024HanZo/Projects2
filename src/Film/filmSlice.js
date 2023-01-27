import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import url from "./api";
export const fetchLink=createAsyncThunk('film/fetchLink' , async(trends) => {
    const num = 1
    const apiKey = "19ec599d0544cd03b6bd426993e8336b";
    const datalink = await url.get(`movie/${trends}?api_key=${apiKey}&language=en-US&page=${num}`)
    return datalink.data.results
})

const FilmSlice = createSlice({
    name:"filmreducer",
    initialState:{
        films:[],
        status:"idle",
        error:"",
        pageInfo:"black",
    },
    reducers:{
        remove(state){
            state.films=[]
        },
        changeColorWhite(state){
            state.pageInfo="white"
        },
        changeColorDark(state){
            state.pageInfo="black"
        },
    }, 
    extraReducers:(builder) => {
        builder
        .addCase(fetchLink.pending,(state) => {
            state.status="loading"
        })
        .addCase(fetchLink.fulfilled,(state,action) => {
            state.status = "succeeded"
            state.films = action.payload
        })
        .addCase(fetchLink.rejected,(state,action)=>{
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export const Error = (state) => state.film.error;
export const filmData = (state) => state.film.films;
export const filmstatus = (state) => state.film.status;
export const changeColor = (state) => state.film.pageInfo
export default FilmSlice.reducer 
export const {remove , changeColorWhite , changeColorDark} = FilmSlice.actions