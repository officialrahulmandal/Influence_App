import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://influence-app-8848c.firebaseio.com/'
});

export default instance;