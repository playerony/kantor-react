import {
    REQUEST_USER_CURRENCIES,
    RESPONSE_USER_CURRENCIES,
    FAILURE_USER_CURRENCIES
} from '../../constants/userCurrency.constants';
import * as userCurrenciesService from '../../services/userCurrency.service';

function requestUserCurrencies(userId) {
    return {
        type: REQUEST_USER_CURRENCIES,
        userId
    }
}

function responseUserCurrencies(json) {
    return {
        type: RESPONSE_USER_CURRENCIES,
        json
    }
}

function failureUserCurrencies(error) {
    return {
        type: FAILURE_USER_CURRENCIES,
        error
    }
}

export function fetchUserCurrencies(userId) {
    return dispatch => {
        dispatch(requestUserCurrencies(userId))
        userCurrenciesService.fetchAllByUserId(userId)
            .then(json => {
                dispatch(responseUserCurrencies(userId, json));
            })
            .catch(error => {
                dispatch(failureUserCurrencies(error));
            })
    }
}