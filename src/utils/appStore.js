import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice.js";
import sidebarReducer from "./sidebarSlice.js";
import themeReducer from "./themeSlice.js";
import emailSlice from "./emailSlice.js";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        sidebar: sidebarReducer,
        emails: emailSlice,
    }
});

export default appStore;