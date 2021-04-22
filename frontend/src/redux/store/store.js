import thunk from 'redux-thunk';

import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { userReducer } from '../reducers/users/userReducer';

const Middlewares = [thunk]

const reducer = combineReducers({
    userLogin: userReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...Middlewares)));

export default store