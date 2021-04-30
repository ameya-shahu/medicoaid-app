import { PATIENT_DETAILS_FAIL, PATIENT_DETAILS_REQUEST, PATIENT_DETAILS_SUCCESS } from "../../actions/actionTypes";

const patientDetailsReducer = (state={loading: true}, action) => {
    switch (action.type){
        case PATIENT_DETAILS_REQUEST:
            return {
                loading: true,
                error: null
            }
        case PATIENT_DETAILS_SUCCESS:
            return {
                loading: false,
                details: action.payload
            }
        case PATIENT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export {patientDetailsReducer};