import axios from 'axios'

const APIClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
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