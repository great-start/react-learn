import React from 'react';

import css from './Comments.module.css'

export const Comment = ({comment: {id, title, body}}) => {

    return (
        <div className={css.comment}>
            <p><b>CommentId: </b>{id}</p>
            <p><b>Title: </b>{title}</p>
            <p><b>Body: </b>{body}</p>
        </div>
    );
};
