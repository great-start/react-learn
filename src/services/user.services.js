import {axiosService} from "./axios.services";
import {url} from "../configs/urls";

export function userServices() {
    this.getAll = () => axiosService.get(url.users).then(response => response.data);
}
