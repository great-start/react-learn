import {url} from "../configs/url";
import {axiosServices} from "./axios.services";

// const getAllById = (id) => {
//     return fetch(`${url.users}/${id}/posts`).then(response => response.json());
// }

export const posts_service = {
    getAllById: (userId) => axiosServices.get(`${url.users}/${userId}/posts`).then(response => response.data)
}