import axios from "axios";

import {baseURL} from "../urls/urls";

const axiosServ = axios.create({
    baseURL
})

const imgGet = {
    get: (name) => axiosServ.get(name).then(response => response.request.responseURL)
}

export default imgGet;