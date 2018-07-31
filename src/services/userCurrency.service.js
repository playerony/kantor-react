import fetch from 'cross-fetch';
import getHeaders from '../utils/headers';

let apiUrl = 'https://hidden-river-60760.herokuapp.com/kantor-api/userCurrencies';

export function save(data) {
    const requestOptions = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            currencyCode: data.code,
            currencyAmount: 1,
            userId: data.userId
        })
    }

    return fetch(apiUrl, requestOptions)
        .then(response => {
            return response.json();
        });
}

export function update(id, data) {
    const requestOptions = {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({
            currencyAmount: data.currencyAmount
        })
    }

    return fetch(`${apiUrl}/${id}`, requestOptions)
        .then(response => {
            return response.json();
        });
}

export function fetchOneById(id) {
    return fetch(`${apiUrl}/id/${id}`)
        .then(response => {
            return response.json();
        });
}

export function fetchAllByUserId(userId) {
    return fetch(`${apiUrl}/userId/${userId}`)
        .then(response => {
            return response.json();
        });
}
