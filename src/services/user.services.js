import {axiosService} from "./axios.services";
import {url} from "../configs";

export const userService = {
    getAll: () => axiosService.get(url.users).then(response => response.data),
    getUserPosts: (id) => axiosService.get(`${url.users}/${id}/posts`).then(repsponse => repsponse.data),
}
