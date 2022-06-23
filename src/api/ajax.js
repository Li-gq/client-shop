// 二次封装axios

import axios from 'axios';
import NProgress from 'nprogress';

const serviser = axios.create({
  baseURL:"/api",
  timeout:1000
});
serviser.interceptors.request.use((config)=>{
  NProgress.start();
  return config;
});
serviser.interceptors.response.use(
  response=>{
    NProgress.done();
    return response.data;
  },
  error=>{
    NProgress.done();
    throw error;
  }
);
export default serviser;