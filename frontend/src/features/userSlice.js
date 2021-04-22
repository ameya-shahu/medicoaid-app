import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user: null
    },
    reducers:{
        login: (state, action) => {
            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': 'http://localhost:3000'   
            //     }
            // };
            // const body = {
            //     'email': action.payload.email,
            //     'password': action.payload.password
            // };
            // axios.post('http://localhost:5000/api/users/login', body, config )
            // .then(response=> {
            //     console.log(response)
            // });
            state.user = action.payload;

        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;