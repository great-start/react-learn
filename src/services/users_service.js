import {url} from "../configs/url";
import {axiosServices} from "./axios.services";


// const getAll = () => {
//     return fetch(url.users).then(response => response.json());
// }

export const users_service = {
    getAll: () => axiosServices.get(url.users).then(response => response.data)
}