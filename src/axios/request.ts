import Request from "@/axios/index";
import transform from '@/axios/axiosTransform'

const request = new Request({
    baseURL:'http://localhost:3000',
    timeout:5000,
    interceptorHooks:transform
})

export default request