import axios from "axios";

import {baseURL} from "../configs";

export const axiosPlaceholderService = axios.create({
    baseURL: baseURL.placeholder,
})

export const axiosCarsService = axios.create({
    baseURL: baseURL.cars,
})
