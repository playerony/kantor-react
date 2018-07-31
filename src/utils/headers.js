export default function getHeaders() {
    return {
        'appauthheader': 'KANTOR-API-AUTH-HEADER',
        'authorization': localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}