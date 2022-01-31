import {axiosService} from "./axios.services";
import {url} from "../configs";

export const commentsService = {
    getAllComments: (postId) => axiosService.get(`${url.posts}/${postId}/comments`).then(response => response.data),
}