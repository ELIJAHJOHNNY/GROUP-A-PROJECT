import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from '../reduxSlice/hamburgerSlice';
import searchReducer from "../reduxSlice/searchSlice";

const store = configureStore({
    reducer:{
        hamburger: hamburgerReducer,
        search: searchReducer,
    }
});

export default store