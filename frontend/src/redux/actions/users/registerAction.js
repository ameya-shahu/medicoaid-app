import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../actionTypes";

import axios from 'axios';

const registerUserAction = (reqJson) => {
    return async (dispatch) =>{
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            })
            // call to api
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            };
            console.log(reqJson);
            const { data } = await axios.post('/api/users/register',
                reqJson ,
                config
            );

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data  
            });

            //local storage
            localStorage.setItem('userAuthData', JSON.stringify(data));
            
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export {registerUserAction};