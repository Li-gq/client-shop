import axios from 'axios';
import NProgress from 'nprogress';

const serviser = axios.create({
  baseURL: "/mock",
  timeout: 10000
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
    throw error;
  }
);
export default serviser;
