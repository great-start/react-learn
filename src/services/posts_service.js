import url from "../configs/url";

const getAllById = (id) => {
    return fetch(`${url.users}/${id}/posts`).then(response => response.json());
}

export const posts_service = {
    getAllById
}