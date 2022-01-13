import url from "../configs/url";

const getAllById = (id) => {
  return fetch(`${url.posts}/${id}/comments`).then(response => response.json())
}

export const comments_service = {
    getAllById
}