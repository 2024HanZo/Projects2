import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import url from "../Film/api";

export const fetchSeries = createAsyncThunk('serie/fetchSeries',async() => {
    const num = 1
    const apiKey = "19ec599d0544cd03b6bd426993e8336b";
    const serieData = await url.get(`tv/popular?api_key=${apiKey}&language=en-US&page=${num}`)
    return serieData.data.results
} )
const serieSlice = createSlice({
    name:"seriereducer",
    initialState:{
        series:[],
        status:"idle",
        error:""
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchSeries.pending,(state) => {
            state.status="loading"
        })
        .addCase(fetchSeries.fulfilled,(state,action) => {
            state.status = "succeeded"
            state.series = action.payload
        })
        .addCase(fetchSeries.rejected,(state,action)=>{
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export const seriesData = (state) => state.series.series;
export const seriestatus = (state) => state.series.status;
export const Error2 = (state) => state.series.error;
export const TvShows = serieSlice.reducer;