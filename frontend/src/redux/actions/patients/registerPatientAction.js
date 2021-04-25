import { PATIENT_REGISTER_FAIL, PATIENT_REGISTER_REQUEST, PATIENT_REGISTER_SUCCESS } from "../actionTypes";
import axios from 'axios';

const registerPatientAction = (reqJson) => {
    return async (dispatch) =>{
        try {
            dispatch({
                type: PATIENT_REGISTER_REQUEST
            })
            // call to api
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            };
            console.log(reqJson);
            const { data } = await axios.post('/api/patients/register',
                reqJson,
                config
            );

            dispatch({
                type: PATIENT_REGISTER_SUCCESS,
                payload: data  
            });

        } catch (error) {
            dispatch({
                type: PATIENT_REGISTER_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export {registerPatientAction}