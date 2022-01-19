import {axiosService} from "./axios.services";
import {url} from "../configs/urls";

export const userServices = () => {
    getAll: () => axiosService.get(url.users).then(response => response.data);
}
