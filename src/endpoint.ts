import axios from "axios";
const api = axios.create({
    timeout: 60000,
    baseURL: `${window.location.origin}/api`,
    withCredentials: true,
    headers: {
        Accept: "application/json",
    },
});

export default api;
