import axios from 'axios';
import { FETCH_PATIENT_FAIL, FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS } from '../actionTypes';

const patientListAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_PATIENT_REQUEST
            });
            // const config = {
            //     headers: {
            //         'content-Type': 'aplication/json'
            //     }
            // }
            
            const { data } = await axios.get('api/patients');

            dispatch({
                type: FETCH_PATIENT_SUCCESS,
                payload: data
            });

        } catch (error) {
             dispatch({
                type: FETCH_PATIENT_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export {patientListAction};