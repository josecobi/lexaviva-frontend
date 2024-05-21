import {createSlice} from '@reduxjs/toolkit';


// initial state of the auth slice
const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        // Login
        setCredentials: (state, action) => {
            // Set the user info from the action payload to the state 
            state.userInfo = action.payload;
            // Set the user info in the local storage using the key 'userInfo' and the value of the action payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        // Logout
        removeCredentials: (state) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },

    },
});

export const {setCredentials, removeCredentials} = authSlice.actions;
export default authSlice.reducer;