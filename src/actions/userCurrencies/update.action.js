import {
    REQUEST_UPDATE_USER_CURRENCY,
    RESPONSE_UPDATE_USER_CURRENCY,
    FAILURE_UPDATE_USER_CURRENCY
} from '../../constants/userCurrency.constants';
import * as userCurrenciesService from '../../services/userCurrency.service';

function requestUpdateUserCurrency(data) {
    return {
        type: REQUEST_UPDATE_USER_CURRENCY,
        data
    }
}

function responseUpdateUserCurrency(json) {
    return {
        type: RESPONSE_UPDATE_USER_CURRENCY,
        json
    }
}

function failureUpdateUserCurrency(error) {
    return {
        type: FAILURE_UPDATE_USER_CURRENCY,
        error: error
    }
}

export function updateUserCurrency(data) {
    return dispatch => {
        dispatch(requestUpdateUserCurrency(data))
        userCurrenciesService.update(data.id, data)
            .then(json => {
                dispatch(responseUpdateUserCurrency(json));
            })
            .catch(function(error) {
                dispatch(failureUpdateUserCurrency(error));
            })
    }
}