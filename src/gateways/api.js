import axios from "axios";
import persistedStore from "../store";
import {logout} from "../actions/UserActions";

const url = process.env.REACT_APP_API_URL;

let api = axios.create({
  baseURL: url
});
// REQUEST interceptors
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

// RESPONSE interceptors
api.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  if (error.response.status === 401 && error.response.data.message === "invalid or expired jwt") {
    persistedStore.store.dispatch(logout())
  }
  console.log(error)
  return Promise.reject(error);
});
export default api