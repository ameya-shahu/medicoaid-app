import { PATIENT_REGISTER_FAIL, PATIENT_REGISTER_REQUEST, PATIENT_REGISTER_SUCCESS } from "../../actions/actionTypes";

const registerPatientReducer = (state = {}, action) => {
    switch (action.type) {
        case PATIENT_REGISTER_REQUEST:
            return {
                loading: true,
            }
        case PATIENT_REGISTER_SUCCESS:
            return {
                patientInfo: action.payload
            }
        case PATIENT_REGISTER_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export {registerPatientReducer};