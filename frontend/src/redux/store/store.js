import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { userReducer, registerReducer } from '../reducers/users/userReducer';

const Middlewares = [thunk]

const userDatafromStorage = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')): null;

const initialState = {
    userLogin: {
        userInfo: userDatafromStorage
    },
    userRegister: {
        userInfo: ''
    }
};

const reducer = combineReducers({
    userLogin: userReducer, 
    userRegister: registerReducer
})

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...Middlewares)));



export default store