import { AxiosError, AxiosRequestConfig } from 'axios';

export const RequestInterceptor = (config: AxiosRequestConfig) => {
	const _token = localStorage.getItem('_token');

	if (_token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${_token}`,
		};
	}

	return config;
};

export const ErrorInterceptor = (error: AxiosError) => {
	const { response } = error;

	if (response) {
		// ...
	}

	return Promise.reject(error);
};
