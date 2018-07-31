import {
    REQUEST_INSERT_USER,
    RECEIVE_INSERT_USER,
    FAILURE_INSERT_USER
} from '../../constants/users.constants.js';
import { save } from '../../services/user.service';

function requestInsertUser(data) {
    return {
        type: REQUEST_INSERT_USER,
        data
    }
}

function responseInsertUser(json) {
    return {
        type: RECEIVE_INSERT_USER,
        json
    }
}

function failureInsertUser(error) {
    return {
        type: FAILURE_INSERT_USER,
        error
    }
}

export function saveUser(data) {
    return dispatch => {
        dispatch(requestInsertUser(data))
        save(data)
            .then(json => {
                dispatch(responseInsertUser(json))
            })
            .catch(function(error) {
                dispatch(failureInsertUser(error))
            })
    }
}