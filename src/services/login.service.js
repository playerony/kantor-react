import fetch from 'cross-fetch';
import getHeaders from '../utils/headers';

let apiUrl = 'https://hidden-river-60760.herokuapp.com';

export function login(data) {
    const requestOptions = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            username: data.username,
            password: data.password
        })
    }

    return fetch(`${apiUrl}/login`, requestOptions)
        .then(response => {
            return response.json();
        });
}