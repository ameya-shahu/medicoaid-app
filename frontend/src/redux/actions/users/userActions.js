import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../actionTypes";

import axios from 'axios';

const loginUserAction = (email, password) => {
    return async (dispatch) =>{
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            })
            // call to api
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            };

            const { data } = await axios.post('/api/users/login',
                { email, password },
                config
            );

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export {loginUserAction};