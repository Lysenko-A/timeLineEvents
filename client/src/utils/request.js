import axios from 'axios';
import {API_URL} from '../constants/app.config';


export const request = (method, url, configs) => (params) => axios[method](`${API_URL}${url}`, params, configs);
