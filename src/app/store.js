import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "../Film/filmSlice";
import { TvShows } from "../Series/SerieSlice";
export default configureStore({
    reducer:{
        film: filmSlice,
        series:TvShows,
    }
})