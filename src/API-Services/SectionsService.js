import axios from 'axios'

const APIClient = axios.create({
    baseURL: 'http://brinquitos-api.jm/api/',
    withCredentials: false,
    Headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getSections() {
        return APIClient.get('secciones')
    }
}