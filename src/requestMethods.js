import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDYwYTI5YTM0YjRkYmFlZmMxMDdiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzE4OTk1MiwiZXhwIjoxNjMzNDQ5MTUyfQ.DiSsk30fL8O9q_e8f3LKU51rE3HzWDcYjeLrh5wVsFE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}` }
});