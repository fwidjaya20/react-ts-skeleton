import Axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	Method,
} from 'axios';
import {
	ErrorInterceptor,
	RequestInterceptor,
} from '@skeleton/cores/https/interceptors';

export abstract class HttpClient {
	private readonly baseUrl: string;
	private instance: AxiosInstance;

	constructor() {
		this.baseUrl = '';
		this.instance = Axios.create();

		this.instance.interceptors.request.use(RequestInterceptor, (error) =>
			Promise.reject(error),
		);

		this.instance.interceptors.response.use(
			(response) => response,
			ErrorInterceptor,
		);
	}

	public request(
		method: Method,
		url: string,
		data: any = {},
		additionalConfig: Partial<AxiosRequestConfig> = {},
	): Promise<AxiosResponse<any>> {
		const config: AxiosRequestConfig = {
			baseURL: this.baseUrl,
			url: url,
			method: method,
			data: data,
			...additionalConfig,
		};

		return this.instance.request(config);
	}
}
