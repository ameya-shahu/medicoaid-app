import axios from 'axios';
import { INITIATE_MACHINE_FAIL, INITIATE_MACHINE_REQUEST, INITIATE_MACHINE_SUCCESS } from '../actionTypes';

const initiateMachineAction = (value, type) => {
    return async (dispatch) => {
        console.log(value);
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
            var payload = null;
            if (type === 'r') {
                const { data } = await axios.post('/api/sensorMachine/newmachine',
                    value,
                    config

                );
                payload = data;

            } else if ( type === 's' ) {
                const { data } = await axios.put('/api/sensorMachine/allocatemachine',
                    value,
                    config
                );
                payload = data;
            }

            dispatch({
                type: INITIATE_MACHINE_SUCCESS,
                payload: payload
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
