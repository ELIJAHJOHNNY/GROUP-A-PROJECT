import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHamActive: false
}

const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers:{
        handleHamburgerToggle: (state) => {
            state.isHamActive = !state.isHamActive
        },
        removeSidebar: (state) => {
            state.isHamActive = false
        }
    }
})

export const { handleHamburgerToggle, removeSidebar } = hamburgerSlice.actions;

export default hamburgerSlice.reducer