import axios from 'axios';
import {
    ASSIGN_MACHINE_FAIL,
    ASSIGN_MACHINE_REQUEST, ASSIGN_MACHINE_SUCCESS,
} from '../actionTypes';



const assignMachineAction = (patientId, machineId) => {
    return async (dispatch) => {

        try {
            dispatch({
                type: ASSIGN_MACHINE_REQUEST
            })
            // call to api
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            };


            const { data } = await axios.post('/api/sensorMachine/assignMachine',
                { patientId , machineId},
                config

            );



            dispatch({
                type: ASSIGN_MACHINE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ASSIGN_MACHINE_FAIL,
                payload: error.response && error.response.data.errors
            })
        }

    }
}

export { assignMachineAction };