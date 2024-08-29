import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePage : 'home',
};

export const sidebarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers: {
        setActivePage: (state,action) => {
            state.activePage = action.payload;
        },
    },
});

export const {setActivePage} = sidebarSlice.actions;

export const selectActivePage = (state) => state.activePage;

export default sidebarSlice.reducer;