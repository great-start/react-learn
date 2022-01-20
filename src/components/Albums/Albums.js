import React, {useEffect, useState} from 'react';
import {userServices} from "../../services/user.services";
import {Outlet, useParams} from "react-router-dom";
import {Album} from "./Album";

export const Albums = () => {

    const {id} = useParams();
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        userServices.getUserAlbums(id).then(albums => setAlbums(albums));
    }, [id]);

    if (!albums) { return null }

    return (
        <>
            <div>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
            <div><Outlet /></div>
        </>
    );
};
