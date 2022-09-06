// axios配置  可自行根据项目进行更改，只需更改该文件即可，其他文件可以不动

// import type { AxiosResponse } from 'axios'
import {
    // AxiosTransform,
    CreateAxiosOptions,
} from './axiosTransform'
// import type { RequestOptions, Result } from '/#/axios'

/**
 * @description: 数据处理，方便区分多种处理方式
 */
// const transform: AxiosTransform = {
//     /**
//      * @description: 处理响应数据。如果数据不是预期格式，可直接抛出错误
//      */
//     transformResponseHook: (res: AxiosResponse<Result>, options: RequestOptions) => {},

//     // 请求之前处理config
//     beforeRequestHook: (config, options) => {},

//     /**
//      * @description: 请求拦截器处理
//      */
//     requestInterceptors: (config, options) => {},

//     /**
//      * @description: 响应拦截器处理
//      */
//     responseInterceptors: (res: AxiosResponse<any>) => {},

//     /**
//      * @description: 响应错误处理
//      */
//     responseInterceptorsCatch: (axiosInstance: AxiosResponse, error: any) => {},
// }

const createAxios = (opt?: Partial<CreateAxiosOptions>) => {
    return {
        ...opt,
    }
}

export const defHttp = createAxios()
