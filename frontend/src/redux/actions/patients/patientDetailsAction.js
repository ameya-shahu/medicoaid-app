import axios from 'axios';
import { PATIENT_DETAILS_FAIL, PATIENT_DETAILS_REQUEST, PATIENT_DETAILS_SUCCESS } from '../actionTypes';

const patientDetailsAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PATIENT_DETAILS_REQUEST 
            });
            // const config = {
            //     headers: {
            //         'content-Type': 'aplication/json'
            //     }
            // }

            const { data } = await axios.get('api/patients/'+ id);

            dispatch({
                type: PATIENT_DETAILS_SUCCESS,
                payload: data,
            })
            
        } catch (error) {
            dispatch({
                type: PATIENT_DETAILS_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export {patientDetailsAction};