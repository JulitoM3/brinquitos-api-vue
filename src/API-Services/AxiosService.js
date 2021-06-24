import axios from 'axios'

let conection = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/',
    headers : {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
    }
})

export default{
    login(email, password){
        return conection.post('auth/login',{
            email : email,
            password: password
        });
    }
}