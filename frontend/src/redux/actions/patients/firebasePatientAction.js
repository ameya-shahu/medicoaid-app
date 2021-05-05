// import axios from 'axios';
import { FIREBASE_UPDATE_FAIL, FIREBASE_UPDATE_REQUEST, FIREBASE_UPDATE_SUCCESS } from '../actionTypes';
const firebasePatientAction = (newData, type) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FIREBASE_UPDATE_REQUEST
            });

            dispatch({
                type: FIREBASE_UPDATE_SUCCESS,
                payload: { data: newData, type: type },
            })

        } catch (error) {
            dispatch({
                type: FIREBASE_UPDATE_FAIL,
                payload: error.response && error.response.data.errors
            })
        }
    }
}

export { firebasePatientAction };