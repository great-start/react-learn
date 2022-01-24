
import {service} from "./episode.services";

const characterService = {
    get: (id) => service.get(`${id}`).then(response => response.data),
}

export {characterService};