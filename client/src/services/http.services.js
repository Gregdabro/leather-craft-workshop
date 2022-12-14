import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "api/"
});

http.interceptors.response.use(
    (res) => {
        return res;
    },
    function (error) {
        console.log(error)
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            alert("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);
const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
};
export default httpService;
