import axiosService from "./axios.service";
import {urls} from "../configs/urls"

export const carServices = {
    create: (car) => axiosService.post(urls.cars, car).then(result => result.data),
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

