import {
    REQUEST_INSERT_USER,
    REQUEST_UPDATE_USER,
    REQUEST_USER,

    RESPONSE_INSERT_USER,
    RESPONSE_UPDATE_USER,
    RESPONSE_USER,

    FAILURE_INSERT_USER,
    FAILURE_UPDATE_USER,
    FAILURE_USER
} from '../constants/user.constants';

export function fetchUser(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_USER:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_USER:
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

export function insertUser(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_INSERT_USER:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_INSERT_USER:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_INSERT_USER:
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

export function updateUser(
    state = {
        isFetching: false,
        isError: false,
        payload: [],
        error: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_UPDATE_USER:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        
        case RESPONSE_UPDATE_USER:
            return {
                ...state,
                payload: action.json,
                isFetching: false,
                isError: false
            }
    
        case FAILURE_UPDATE_USER:
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