import React from 'react';

import css from './pages.module.css'

export const SingleUserPost = ({post: {id,title,body}}) => {

    return (
        <div className={css.singlePost}>
            <p><b>PostId:</b> {id}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};
