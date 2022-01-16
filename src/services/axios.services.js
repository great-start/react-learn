import axios from "axios";

import baseUrl from "../configs/url";

export const axiosServices = axios.create({
    baseURL:baseUrl
})