import { FIREBASE_UPDATE_FAIL, FIREBASE_UPDATE_REQUEST, FIREBASE_UPDATE_SUCCESS } from "../../actions/actionTypes";

const firebasePatientReducer = (state={}, action) => {
    switch (action.type){
        case FIREBASE_UPDATE_REQUEST:
            return {
                loading: true,
                error: null
            }
        case FIREBASE_UPDATE_SUCCESS:
            return {
                loading: false,
                details: action.payload
            }
        case FIREBASE_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export { firebasePatientReducer };