import {axiosPlaceholderService} from "./axios.services";
import {url} from "../configs";

export const userService = {
    getAll: () => axiosPlaceholderService.get(url.users).then(response => response.data),
}
