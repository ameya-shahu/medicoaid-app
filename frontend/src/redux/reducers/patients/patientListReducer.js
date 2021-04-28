import { FETCH_PATIENT_FAIL, FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS } from "../../actions/actionTypes";


const patientListReducer = (state={loading: true}, action) => {
    switch (action.type){
        case FETCH_PATIENT_REQUEST:
            return {
                loading: true,
                error: null
            }
        case FETCH_PATIENT_SUCCESS:
            return {
                loading: false,
                patientInfo: action.payload
            }
        case FETCH_PATIENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export {patientListReducer};