import {axiosCarsService} from "./axios.services";
import {url} from "../configs";

export const carsService = {
    getAll: () => axiosCarsService.get(url.cars).then(value => value.data),
}