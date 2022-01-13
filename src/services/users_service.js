import url from "../configs/url";

const getAll = () => {
    return fetch(url.users).then(response => response.json());
}

export const users_service = {
    getAll
}