import {
    REQUEST_LOGIN,
    RESPONSE_LOGIN,
    FAILURE_LOGIN,
    LOGOUT
} from '../constants/login.constants';

export function login(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_LOGIN:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_LOGIN:
            return {
                ...state,
                error: action.error,
                isFetching: false,
                isError: true,
            }

        case LOGOUT:
            return {
                ...state,
                error: [],
                payload: [],
                isFetching: false,
                isError: false,
            }

        default:
            return state
    }
}