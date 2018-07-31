import {
    REQUEST_INSERT_USER_CURRENCY,
    REQUEST_UPDATE_USER_CURRENCY,
    REQUEST_USER_CURRENCIES,

    RESPONSE_UPDATE_USER_CURRENCY,
    RESPONSE_INSERT_USER_CURRENCY,
    RESPONSE_USER_CURRENCIES,

    FAILURE_INSERT_USER_CURRENCY,
    FAILURE_UPDATE_USER_CURRENCY,
    FAILURE_USER_CURRENCIES
} from '../constants/userCurrency.constants'

export function fetchUserCurrencies(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_USER_CURRENCIES:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_USER_CURRENCIES:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_USER_CURRENCIES:
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

export function insertUserCurrency(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_INSERT_USER_CURRENCY:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_INSERT_USER_CURRENCY:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_INSERT_USER_CURRENCY:
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

export function updateUserCurrency(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_UPDATE_USER_CURRENCY:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_UPDATE_USER_CURRENCY:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_UPDATE_USER_CURRENCY:
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