import {axiosPlaceholderService} from "./axios.services";
import {url} from "../configs";

export const postsService = {
    getAll: () => axiosPlaceholderService.get(url.posts).then(response => response.data),
}