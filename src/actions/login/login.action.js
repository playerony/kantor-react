import jwtDecode from 'jwt-decode';
import {
    REQUEST_LOGIN,
    RESPONSE_LOGIN,
    FAILURE_LOGIN,
    LOGOUT
} from '../../constants/login.constants';
import { fetchUser } from '../../actions/user/get.action';
import * as loginService from '../../services/login.service';

function requestLogin(data) {
    return {
        type: REQUEST_LOGIN,
        data
    }
}

function responseLogin(json) {
    return {
        type: RESPONSE_LOGIN,
        json
    }
}

function failureLogin(error) {
    return {
        type: FAILURE_LOGIN,
        error
    }
}

export function logout() {
    localStorage.removeItem('token');

    return {
        type: LOGOUT
    }
}

export function login(data) {
    return dispatch => {
        dispatch(requestLogin(data))
        loginService.login(data)
            .then(json => {
                dispatch(responseLogin(json));
                localStorage.setItem('token', json);
            })
            .catch(function(error) {
                dispatch(failureLogin(error));
            })
    }
}