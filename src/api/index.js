import axios from 'axios';
// import store from "../store";

export const http = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// http.interceptors.request.use(config => {
//   store.dispatch("ui/toggleIsLoading");
//   console.log(config);
//   return config;
// });
