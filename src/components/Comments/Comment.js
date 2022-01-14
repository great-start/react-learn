import React from 'react';

const Comment = ({comment: {id, name, body}}) => {

    return (
        <div>
            <p><b>Comment:</b> {id}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Body:</b> {body}</p>
            <hr/>
        </div>
    );
};

export default Comment;