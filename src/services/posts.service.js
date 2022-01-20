import {axiosService} from "./axios.services";
import {url} from "../configs/urls";

export const postsService = {
    getAll: () => axiosService.get(url.posts).then(response => response.data)
}