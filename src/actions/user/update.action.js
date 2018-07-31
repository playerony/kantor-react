import {
    REQUEST_UPDATE_USER,
    RECEIVE_UPDATE_USER,
    FAILURE_UPDATE_USER
} from '../../constants/users.constants.js';
import { update } from '../../services/user.service';

function requestUpdateUser(data) {
    return {
        type: REQUEST_UPDATE_USER,
        data
    }
}

function responseUpdateUser(json) {
    return {
        type: RECEIVE_UPDATE_USER,
        json
    }
}

function failureUpdateUser(error) {
    return {
        type: FAILURE_UPDATE_USER,
        error
    }
}

export function updateUser(id, data) {
    return dispatch => {
        dispatch(requestUpdateUser(data))
        update(id, data)
            .then(json => {
                dispatch(responseUpdateUser(json));
            })
            .catch(function(error) {
                dispatch(failureUpdateUser(error));
            })
    }
}