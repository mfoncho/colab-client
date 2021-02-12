import { AxiosInstance, AxiosResponse } from 'axios'
export { CancelTokenSource, CancelToken } from "axios"
export { default } from "axios";
export type EndpointResponse<T=any> = AxiosResponse<T>;
export type Response<T> = Promise<EndpointResponse<T>>;
export interface Endpoint extends AxiosInstance {}
