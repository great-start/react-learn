import axios from "axios";
import {baseURL} from "../urls/urls";

const service = axios.create({
    baseURL
})

export const episodeService = {
    get: (page) => service.get(`episode?page=${page}`).then(response => response.data),
}