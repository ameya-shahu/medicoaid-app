// import axios from 'axios';
import { INITIATE_MACHINE_FAIL, INITIATE_MACHINE_REQUEST, INITIATE_MACHINE_SUCCESS } from '../actionTypes';

const initiateMachineAction = (value) => {
    return async (dispatch) =>{
        try {
            dispatch({
                type: INITIATE_MACHINE_REQUEST
            })
            // call to api
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            };
    
            const { data } = await axios.post('/api/',
                value,
                config
            );

            dispatch({
                type: INITIATE_MACHINE_SUCCESS,
                payload: data  
            });
            
        } catch (error) {
            dispatch({
                type: INITIATE_MACHINE_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export { initiateMachineAction };
