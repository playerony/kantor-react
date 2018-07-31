import {
    REQUEST_USER,
    RESPONSE_USER,
    FAILURE_USER
} from '../../constants/user.constants';
import { fetchOneByUsername } from '../../services/user.service';

function requestUser(username) {
    return {
        type: REQUEST_USER,
        username
    }
}

function responseUser(json) {
    return {
        type: RESPONSE_USER,
        json
    }
}

function failureUser(error) {
    return {
        type: FAILURE_USER,
        error
    }
}

export function fetchUser(username) {
    return dispatch => {
        dispatch(requestUser(username))
        return fetchOneByUsername(username)
            .then(json => {
                dispatch(responseUser(json));
            })
            .catch(function(error) {
                dispatch(failureUser(error));
            })
    }
}