import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://twitter-6da36.firebaseio.com/'
});

export default instance;