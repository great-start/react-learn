import {axiosPlaceholderService} from "./axios.services";
import {url} from "../configs";

export const commentsService = {
    getAll: () => axiosPlaceholderService.get(url.comments).then(response => response.data),
}