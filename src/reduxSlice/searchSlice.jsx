import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearchActive: false
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        handleSearchToggle: (state) => {
            state.isSearchActive = true
        },
        removeSearchField: (state) => {
            state.isSearchActive = false
        }
    }
});

export const { handleSearchToggle, removeSearchField } = searchSlice.actions;
export default searchSlice.reducer;