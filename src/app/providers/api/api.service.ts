import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class ApiService {
    private httpClient: AxiosInstance

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient
    }

    get(path: string, params = {}, requestConfig: AxiosRequestConfig = {}) {
        return this.request(path, {
            method: 'GET',
            params,
            ...requestConfig
        })
    }

    post(path: string, data = {}, requestConfig: AxiosRequestConfig = {}) {
        return this.request(path, {
            method: 'POST',
            data,
            ...requestConfig
        })
    }

    put(path: string, data = {}, requestConfig: AxiosRequestConfig = {}) {
        return this.request(path, {
            method: 'PUT',
            data,
            ...requestConfig
        })
    }

    delete(path: string, params = {}, requestConfig: AxiosRequestConfig = {}) {
        return this.request(path, {
            method: 'DELETE',
            params,
            ...requestConfig
        })
    }

    patch(path: string, data = {}, requestConfig: AxiosRequestConfig = {}) {
        return this.request(path, {
            method: 'PATCH',
            data,
            ...requestConfig
        })
    }

    async request<T = any>(url: string, config: AxiosRequestConfig): Promise<T | {}> {
        const response: AxiosResponse<T> = await this.httpClient.request({
            url,
            responseType: config.responseType || 'json',
            ...config
        })

        return response.data || {}
    }
}
