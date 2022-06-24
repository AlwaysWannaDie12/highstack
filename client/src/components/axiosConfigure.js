import axios from 'axios';

const app = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default app;