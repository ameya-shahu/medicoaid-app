import { INITIATE_MACHINE_FAIL, INITIATE_MACHINE_REQUEST, INITIATE_MACHINE_SUCCESS, LOAD_MACHINE_LIST_FAIL, LOAD_MACHINE_LIST_REQUEST, LOAD_MACHINE_LIST_SUCCESS } from "../../actions/actionTypes"

const sensorMachineReducer = (state = {}, action) => {
    switch (action.type) {
        case INITIATE_MACHINE_REQUEST:
            return {
                loading: true,
            }
        case INITIATE_MACHINE_SUCCESS:
            return {
                sensorMachine: action.payload,
            }
        case INITIATE_MACHINE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }


        case LOAD_MACHINE_LIST_REQUEST:
            return {
                loading: true,
            }
        case LOAD_MACHINE_LIST_SUCCESS:
            return {
                sensorMachine: action.payload,
            }
        case LOAD_MACHINE_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export { sensorMachineReducer };