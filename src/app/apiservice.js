import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/'
})

class ApiService {
    constructor(apiurl) {
        this.apiurl = apiurl
    }

    post(url, data) {
        console.log(JSON.stringify(data))
        const requestUrl = `${this.apiurl}${url}`
        return axiosInstance.post(`${requestUrl}`, data);
    }

    put(url, data) {
        const requestUrl = `${this.apiurl}${url}`
        return axiosInstance.put(`${requestUrl}`, data);
    }

    delete(url) {
        const requestUrl = `${this.apiurl}${url}`
        return axiosInstance.delete(`${requestUrl}`);
    }

    get(url) {
        const requestUrl = `${this.apiurl}${url}`
        return axiosInstance.get(`${requestUrl}`);
    }
}

export default ApiService;