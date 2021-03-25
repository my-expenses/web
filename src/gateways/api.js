import axios from "axios";

const url = process.env.REACT_APP_API_URL;

let api = axios.create({
  baseURL: url
});
// REQUEST interceptors
api.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// RESPONSE interceptors
api.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  console.log(error)
  return Promise.reject(error);
});
export default api