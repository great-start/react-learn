import React from 'react';

const Comment = ({comment: {id, name, body}}) => {

    return (
        <div>
            <p>Comment: {id}</p>
            <p>Name: {name}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;