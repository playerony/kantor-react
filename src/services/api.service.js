import fetch from 'cross-fetch';
import getHeaders from '../utils/headers';

let apiUrl = 'https://hidden-river-60760.herokuapp.com/kantor-api/api';

export function fetchCurrencies() {
    const requestOptions = {
        method: 'GET',
        headers: getHeaders()
    }

    return fetch(apiUrl, requestOptions)
        .then(response => {
            return response.json();
        });
}