import React from 'react';

import css from './Photos.module.css'

export const Photo = ({photo: {id, title, url}}) => {

    return (
        <div className={css.photo}>
            <div>
                <p><b>PhotoId:</b>{id}</p>
                <p><b>Title: </b>{title}</p>
            </div>
            <img src={url} alt={title}/>
        </div>
    );
};

