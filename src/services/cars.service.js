import {axiosCarsService} from "./axios.services";

export const carsService = {
    getAll: () => axiosCarsService.getAll().then(value => value.data),
}