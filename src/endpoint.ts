import axios, { AxiosInstance } from "axios";

export interface Endpoint extends AxiosInstance {}

const endpoint: Endpoint = axios.create({
    timeout: 30000,
    baseURL: `${window.location.origin}/api`,
    withCredentials: true,
    headers: {
        "api-version": "v1",
        Accept: "application/json",
    },
});

export default endpoint;
