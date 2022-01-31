import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {Photo} from "./Photo";
import {photosService} from "../../services";

export const Photos = () => {

    const {albumId} = useParams();
    const [photos, setPhotos] = useState();

    useEffect(() => {
        photosService.getAllByAlbumId(albumId).then(value => setPhotos(value));
    },[albumId])

    return (
        <>
            {photos && photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </>
    );
};

