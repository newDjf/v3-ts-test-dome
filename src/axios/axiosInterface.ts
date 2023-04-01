import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig}
from 'axios'


// 拓展axios请求配置，加入我们自己的配置
export interface RequestOptions {
    globalErrorMessage?: boolean, // 是否全局展示请求，错误信息
    globalSuccessMessage?: boolean // 是否全局展示请求，成功信息
}

// 拓展自定义请求配置
export interface ExpandAxiosRequestConfig < D = any > extends AxiosRequestConfig < D > {
    interceptorHooks?: InterceptorHooks,
    requestOptions?: RequestOptions
}

// 拓展axios请求配置
export interface ExpandInternalAxiosRequestConfig < D = any > extends InternalAxiosRequestConfig < D > {
    interceptorHooks?: InterceptorHooks,
    requestOptions?: RequestOptions
}

// 拓展axios返回配置
export interface ExpandAxiosResponse < T = any,
D = any > extends AxiosResponse < T,
D > {
    config: ExpandInternalAxiosRequestConfig < D >
}

export interface InterceptorHooks {
    requestInterceptor?: (config : InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
    requestInterceptorCatch?: (error : any) => any,
    responseInterceptor?: (resonse : AxiosResponse) => AxiosResponse | Promise < AxiosResponse >,
    responseInterceptorCatch?: (error : any) => any
}

export interface ResModel {
    str: string,
    num: number
}
