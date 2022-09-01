import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from '../reduxSlice/hamburgerSlice'
import displayMoviesReducer from "../reduxSlice/displayMoviesSlice";

const store = configureStore({
    reducer:{
        hamburger: hamburgerReducer,
        // displayMovies: displayMoviesReducer
    }
});

export default store