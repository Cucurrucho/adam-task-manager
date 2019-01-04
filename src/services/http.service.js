import axios from "axios";

let host = '/api';

class HttpService {
    async get(url){
        let error;
        try {
            const response = await axios.get(host + url);
            return response.data;
        } catch (responseError) {
            error = responseError;
        }
        return error.response;
    }

    async delete(url){
        let error;
        try {
            await axios.delete(host + url);
            return true;
        } catch (responseError) {
            error = responseError;
        }
        return error.response;
    }

    async patch(url, data){
        let error;
        try {
            await  axios.post(host + url, data);
            return true;
        } catch (responseError) {
            error = responseError;
        }
        return error.response;
    }

    async post(url, data){
        let error;
        try {
            const response = await  axios.post(host + url, data);
            return response.data;
        } catch (responseError) {
            error = responseError;
        }
        return error.response;
    }

    static install(Vue) {
        Vue.prototype.$http = service;
    }
}

const service = new HttpService();

export default service;
export const installer = HttpService;
