import axios from "axios"; 
import { Toast } from 'vant';
const service = axios.create({
  baseURL: "http://81.71.65.4:3003",
  timeout: 30000, // 请求超时时间 
});

// request 对请求进行拦截
service.interceptors.request.use(
  (config) => {  
    // 添加token
    config.headers["user-token"] = "gg12j3h4ghj2g134kj1g234gh12jh34k12h34g12kjh34kh1g";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// response 响应拦截器
service.interceptors.response.use(
  (res) => {
  if(res.data.code === 666){
  return res.data
  }else{
    Toast.fail('网络异常,请稍后再试'); 
  }
  },
  (error) => { 
    Toast.fail('网络异常,请稍后再试');
  }
);

const get = (url,data)=>{
    return service.get(url,{params:data});
}

export default{
...service,
get
}