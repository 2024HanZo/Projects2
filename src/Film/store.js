import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./filmSlice";
import { TvShows } from "../Series/SerieSlice";
export default configureStore({
    reducer:{
        film: filmSlice,
        series:TvShows,
    }
})