import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem('token') || null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.token = action.payload;
        },
        removeUser: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;