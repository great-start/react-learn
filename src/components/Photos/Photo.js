import React from 'react';

export const Photo = ({photo: {id, title, url}}) => {

    return (
        <div>
            <p><b>PhotoId:</b>{id}</p>
            <p><b>Title: </b>{title}</p>
            <img src={url} alt={title}/>
        </div>
    );
};

