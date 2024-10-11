import axios from 'axios';

const createAxiosClient = (baseURL) => {
    const client = axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Interceptors
    // Add a request interceptor
    client.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    client.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if(response && response.data) {
            return response.data.products;
        }
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return client;
};

const clientId = '11a6ffb5bee84067aed6bf4e75191261'; // Thay thế bằng client ID của bạn
const clientSecret = 'b3b76ec01026427e8c9f1a7972bee132'; // Thay thế bằng client secret của bạn

const getAccessToken = async () => {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        params: {
            grant_type: 'client_credentials',
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
    });
    return response.data.access_token;
};

const axiosClient1 = createAxiosClient('https://dummyjson.com/');
const axiosClient2 = createAxiosClient('https://open.spotify.com/');

export { axiosClient1, axiosClient2, getAccessToken};