import {
    REQUEST_CURRENCIES,
    RESPONSE_CURRENCIES,
    FAILURE_CURRENCIES
} from '../../constants/api.constants';
import * as apiService from '../../services/api.service';

function requestCurrencies() {
    return {
        type: REQUEST_CURRENCIES
    }
}

function responseCurrencies(json) {
    return {
        type: RESPONSE_CURRENCIES,
        json
    }
}

function failureCurrencies(error) {
    return {
        type: FAILURE_CURRENCIES,
        error
    }
}

export function fetchCurrencies() {
    return dispatch => {
        dispatch(requestCurrencies())
        apiService.fetchCurrencies()
            .then(json => {
                if(json.status >= 400 && json.status <= 500)
                    dispatch(failureCurrencies(json.error));
                else
                    dispatch(responseCurrencies(json));
            })
            .catch(error => {
                dispatch(failureCurrencies(error));
            })
    }
}