import {
    REQUEST_INSERT_USER_CURRENCY,
    RESPONSE_INSERT_USER_CURRENCY,
    FAILURE_INSERT_USER_CURRENCY
} from '../../constants/userCurrency.constants';
import * as userCurrenciesService from '../../services/userCurrency.service';

function requestInsertUserCurrency(data) {
    return {
        type: REQUEST_INSERT_USER_CURRENCY,
        data
    }
}

function responseInsertUserCurrency(json) {
    return {
        type: RESPONSE_INSERT_USER_CURRENCY,
        json
    }
}

function failureInsertUserCurrency(error) {
    return {
        type: FAILURE_INSERT_USER_CURRENCY,
        error
    }
}

export function insertUserCurrency(data) {
    return dispatch => {
        dispatch(requestInsertUserCurrency(data))
        userCurrenciesService.save(data)
            .then(json => {
                dispatch(responseInsertUserCurrency(json));
            })
            .catch(error => {
                dispatch(failureInsertUserCurrency(error));
            })
    }
}