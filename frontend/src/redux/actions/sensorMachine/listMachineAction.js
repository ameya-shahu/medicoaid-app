import axios from 'axios';
import { LOAD_MACHINE_LIST_FAIL, LOAD_MACHINE_LIST_REQUEST, LOAD_MACHINE_LIST_SUCCESS } from '../actionTypes';



const listMachineAction = (userId) => {
    return async (dispatch) => {

        try {
            dispatch({
                type: LOAD_MACHINE_LIST_REQUEST
            })
            // call to api
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            };
            
            const url = '/api/sensormachine/listMachine/' + userId;
            const { data } = await axios.get( url,
                config

            );



            dispatch({
                type: LOAD_MACHINE_LIST_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: LOAD_MACHINE_LIST_FAIL,
                payload: error.response && error.response.data.errors
            })
        }

    }
}

export { listMachineAction };