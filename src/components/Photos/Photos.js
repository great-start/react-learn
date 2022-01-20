import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {photosService} from "../../services/albumPhotos.service";
import {Photo} from "./Photo";

export const Photos = () => {

    const {albumId} = useParams();
    const [photos, setPhotos] = useState();
    console.log(photos);

    useEffect(() => {
        photosService.getAllByAlbumId(albumId).then(value => setPhotos(value));
    },[albumId])

    return (
        <>
            {photos && photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </>
    );
};

