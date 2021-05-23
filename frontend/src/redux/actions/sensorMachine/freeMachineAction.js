import axios from 'axios';
import {FREE_MACHINE_FAIL, FREE_MACHINE_REQUEST, FREE_MACHINE_SUCCESS,} from '../actionTypes';


const freeMachineAction = (patientId, machineId) => {
    return async (dispatch) => {

        try {
            dispatch({
                type: FREE_MACHINE_REQUEST
            })
            // call to api
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            };


            const {data} = await axios.post('/api/sensorMachine/freeMachine',
                {patientId, machineId},
                config
            );


            dispatch({
                type: FREE_MACHINE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: FREE_MACHINE_FAIL,
                payload: error.response && error.response.data.errors
            })
        }

    }
}

export {freeMachineAction};