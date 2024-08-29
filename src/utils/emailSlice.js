import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
    name: "emails",
    initialState: {
        allEmails: [],
        loading: false,
        error: null,
    },
    reducers: {
        setEmails: (state, action) => {
            state.allEmails = action.payload;
            state.loading = false;
            state.error = null;
        },
        addEmail: (state, action) => {
            state.allEmails.push(action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setEmails, addEmail, setLoading, setError } = emailSlice.actions;

export default emailSlice.reducer;