import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../actionTypes";

import axios from 'axios';

const registerUserAction = (resqJson) => {
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

            const { data } = await axios.post('/api/users/register',
                { resqJson },
                config
            );

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data  
            });
            
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export {registerUserAction};