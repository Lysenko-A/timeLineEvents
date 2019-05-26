import axios from 'axios';
import { API_URL } from '../constants/app.config';

export const request = (method, url, data, headers) => () => {
  const fullUrl = `${API_URL}${url}`;

  headers = headers || {};

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(fullUrl, {
        params: data,
        headers: headers,
      });
    case 'delete':
      return axios.delete(fullUrl, data);
    case 'post':
      return axios.post(fullUrl, data, { headers });
    default:
      return axios();
  }
}