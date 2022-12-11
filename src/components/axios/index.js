import axios from "axios";
const BASE_URL = 'https://pagefinancials.com/webapp/'
export const Request = axios.create({
    baseURL:BASE_URL,
    headers:{
     'Content-Type': 'application/json',
     Accept: "application/json",
    }
})
export const requestAuth = axios.create({
    baseURL:BASE_URL,
    headers:{'Content-Type': 'application/json'},
    withCredentials:true,
})

