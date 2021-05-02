import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import persistedStore from "../store";
import {logout} from "../actions/UserActions";

const url = process.env.REACT_APP_API_URL;

let api = axios.create({
  baseURL: url
});
// REQUEST interceptors
api.interceptors.request.use(function (config) {
  let token;
  if (config.url === '/users/refresh-token') {
    token = localStorage.getItem("refreshToken");
  } else {
    token = localStorage.getItem("accessToken");
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

// RESPONSE interceptors
api.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.config.url === "/users/refresh-token" &&
    error.response.status === 401) {
    persistedStore.store.dispatch(logout())
  }
  return Promise.reject(error);
})

const refreshAuthLogic = failedRequest =>
  api.post("/users/refresh-token")
    .then(response => {
      localStorage.setItem("accessToken", response.data.accessToken)
      localStorage.setItem("refreshToken", response.data.refreshToken)
      failedRequest.response.config.headers['Authorization'] = `Bearer ${response.data.accessToken}`
      return Promise.resolve()
    })

createAuthRefreshInterceptor(api, refreshAuthLogic)

export default api