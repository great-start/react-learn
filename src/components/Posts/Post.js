import React from 'react';


const Post = ({id, title, showComments}) => {

    return (
        <>
            <p><b>PostId: </b> {id} <b>Title:</b> {title}</p>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </>
    );
};

export default Post;