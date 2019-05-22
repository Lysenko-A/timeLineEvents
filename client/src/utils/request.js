import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const request = (method, url, configs) => (params) => axios[method](`${baseURL}${url}`, params, configs);
