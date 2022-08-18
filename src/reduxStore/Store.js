import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from '../reduxSlice/hamburgerSlice'

const store = configureStore({
    reducer:{
        hamburger: hamburgerReducer
    }
});

export default store