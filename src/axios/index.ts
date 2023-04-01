import axios from 'axios'
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig}
from 'axios'

import {BaseApiResponse} from "@/axios/axiosType"
import {
    RequestOptions,
    ExpandAxiosRequestConfig,
    ExpandInternalAxiosRequestConfig,
    ExpandAxiosResponse,
    InterceptorHooks
} from '@/axios/axiosInterface'


// 导出Request类，可以用来自定义传递配置来创建实例
export default class Request {
    private _instance : AxiosInstance // axios 实例
    private _defaultConfig : ExpandAxiosRequestConfig = {
        baseURL: "http://localhost:3000",
        timeout: 5000,
        requestOptions: {
            globalErrorMessage: true,
            globalSuccessMessage: false
        }
    }
    private _interceptorHooks?: InterceptorHooks;
    constructor(config : ExpandAxiosRequestConfig) { // 使用axios.create创建axios实例
        this._instance = axios.create(Object.assign(this._defaultConfig, config))
        this._interceptorHooks = config.interceptorHooks
        this.setupInterceptors()
    }

    // 通用拦截，在初始化时就进行注册和运行，对基础属性进行处理
    private setupInterceptors() {
        this._instance.interceptors.request.use(this._interceptorHooks ?. requestInterceptor, this._interceptorHooks ?. requestInterceptorCatch)
        this._instance.interceptors.response.use(this._interceptorHooks ?. responseInterceptor, this._interceptorHooks ?. requestInterceptorCatch)
    }

    // 定义核心请求
    public request(config : ExpandAxiosRequestConfig): Promise < AxiosResponse > {
        // 注意：axios已经将请求使用promise封装过了
        // 这里直接返回，不需要我们再使用promise封装一层
        return this._instance.request(config)
    }

    public get < T = any > (url : string, data? : any, config? : ExpandAxiosRequestConfig): Promise < AxiosResponse < BaseApiResponse < T >>> {
        return this._instance.get(url, config)
    }

    public post < T = any > (url : string, data? : any, config? : ExpandAxiosRequestConfig): Promise < T > {
        return this._instance.post(url, data, config)
    }

    public put < T = any > (url : string, data? : any, config? : ExpandAxiosRequestConfig): Promise < T > {
        return this._instance.put(url, data, config)
    }

    public delete < T = any > (url : string, config? : ExpandAxiosRequestConfig): Promise < T > {
        return this._instance.delete(url, config)
    }
}

