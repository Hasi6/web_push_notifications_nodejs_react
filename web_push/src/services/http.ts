/*
 * @Author: Hasi6 (hasitha.chandula@gmail.com)
 * @Date:   2020-11-06 00:43:03
 * @Last Modified by: Hasi6
 * @Last Modified time: 2021-01-07 20:58:45
 */
import axios from 'axios';

const http = axios.create({
  baseURL: 'BASE_URL',
  timeout: 30000,
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = 'idToken';
  return Promise.resolve(config);
  //   return authServices
  //     .getCurrentUserToken()
  //     .then((idToken: string | null) => {

  //     })
  //     .catch((error: any) => {
  //       Logger.error('http request', error);
  //       return Promise.reject(error);
  //     });
});

http.interceptors.response.use(
  (response) => {
    console.info(`http response ${response.config.url}`, response);
    return response;
  },
  (error) => {
    console.error(`http response ${error.config.url}`, error);
    return Promise.reject(error.response);
  }
);

export default http;
