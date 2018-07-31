import {
    REQUEST_CURRENCIES,
    RESPONSE_CURRENCIES,
    FAILURE_CURRENCIES
} from '../constants/api.constants';

export function currencies(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_CURRENCIES:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_CURRENCIES:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_CURRENCIES:
            return {
                ...state,
                error: action.error,
                isFetching: false,
                isError: true,
            }

        default:
            return state
    }
}