import { createSlice } from '@reduxjs/toolkit';

const json = localStorage.getItem('user');
const initialState = {
    user:json? JSON.parse(localStorage.getItem('user'))?.user:  null,
    token:json? JSON.parse(localStorage.getItem('user'))?.token : null,
    isAuthenticated: !!localStorage.getItem('user'),
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
