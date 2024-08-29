import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: true,
    },
    reducers: {
        toggleTheme: (state)=> {
            state.isDarkMode = !state.isDarkMode;
        },
        setDarkMode: (state) => {
            state.isDarkMode = true;
        },
        setLightMode: (state) => {
            state.isDarkMode = false;
        },
    },
});

export const {toggleTheme,setDarkMode,setLightMode} = themeSlice.actions;
export const selectIsDarkMode = (state) => state.theme.isDarkMode;

export default themeSlice.reducer;