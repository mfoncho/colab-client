import axios, { AxiosInstance } from "axios";

export interface Endpoint  extends AxiosInstance {}

const endpoint: Endpoint = axios.create({
    timeout: 60000,
    baseURL: `${window.location.origin}/api`,
    withCredentials: true,
    headers: {
        Accept: "application/json",
    },
});

export default endpoint;
