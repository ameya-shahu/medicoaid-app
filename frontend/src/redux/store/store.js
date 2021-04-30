import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { userReducer } from '../reducers/users/userReducer';
import { registerPatientReducer } from '../reducers/patients/patientReducer';
import {patientListReducer} from '../reducers/patients/patientListReducer'
import { patientDetailsReducer } from '../reducers/patients/patientDetailsReducer';

const Middlewares = [thunk]

const userDatafromStorage = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')): null;

const initialState = {
    userLogin: {
        userInfo: userDatafromStorage
    }
};

const reducer = combineReducers({
    userLogin: userReducer,
    createPatient: registerPatientReducer,
    patientList: patientListReducer,
    patientDetail: patientDetailsReducer
})

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...Middlewares)));



export default store