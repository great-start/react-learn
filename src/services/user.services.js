import {axiosService} from "./axios.services";
import {url} from "../configs/urls";

export const userServices = {
    getAll: () => axiosService.get(url.users).then(response => response.data),
    getUserPosts: (id) => axiosService.get(`${url.users}/${id}/posts`).then(repsponse => repsponse.data),
    getUserAlbums: (id) => axiosService.get(`${url.users}/${id}/albums`).then(response => response.data),
}
