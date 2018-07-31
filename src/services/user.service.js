import fetch from 'cross-fetch';
import getHeaders from '../utils/headers';

let apiUrl = 'https://hidden-river-60760.herokuapp.com/kantor-api/users';

export function save(data) {
    const requestOptions = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            username: data.username,
            password: data.password,
            cash: data.cash
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
            cash: data.cash
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

export function fetchOneByUsername(username) {
    return fetch(`${apiUrl}/username/${username}`)
        .then(response => {
            return response.json();
        });
}
