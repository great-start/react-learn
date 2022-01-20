import React from 'react';
import {Link} from "react-router-dom";

import css from './Album.module.css'

export const Album = ({album}) => {

    const {userId, id : albumId, title} = album;

    return (
        <>
            <div className={css.singleAlbum}>
                <p><b>UserId: </b>{userId}</p>
                <p><b>AlbumId: </b>{albumId}</p>
                <p><b>Title: </b>{title}</p>
                <Link to={`${albumId.toString()}/photos`}><button>Photos</button></Link>
            </div>
        </>
    );
};
