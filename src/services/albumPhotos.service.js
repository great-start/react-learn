import {axiosService} from "./axios.services";
import {url} from "../configs/urls";

export const photosService = {
    getAllByAlbumId: (id) => axiosService.get(`${url.albums}/${id}/photos`).then(response => response.data)
}