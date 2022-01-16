import {url} from "../configs/url";
import {axiosServices} from "./axios.services";

// const getAllById = (id) => {
//   return fetch(`${url.posts}/${id}/comments`).then(response => response.json())
// }

export const comments_service = {
    getAllById: (postId) => axiosServices.get(`${url.posts}/${postId}/comments`).then(response => response.data)
}