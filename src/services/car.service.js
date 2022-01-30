import {axiosServices} from "./axios.services";
import {urls} from "../urls";

export const carService = {
    getAll: () => axiosServices.get(urls.cars).then(value => value.data),
    create: (car) => axiosServices.post(urls.cars, car).then(value => value.data),
    delete: (id) => axiosServices.delete(`${urls.cars}/${id}`).then(value => value.data),
    update: (id) => axiosServices.patch(`${urls.cars}/${id}`).then(value => value.data)
}