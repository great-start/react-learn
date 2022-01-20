import React from 'react';

export const Comment = ({comment: {id, title, body}}) => {

    return (
        <div>
            <p><b>CommentId: </b>{id}</p>
            <p><b>Title: </b>{title}</p>
            <p><b>Body: </b>{body}</p>
        </div>
    );
};
