import React from 'react';

const User = ({user : {id, name}, showPosts}) => {

    return (
        <div>
            <p><b>Id:</b>{id} - <b>Name:</b>{name}.</p>
            <button onClick={() => showPosts(id)}>Show User Posts</button>
        </div>
    );
};

export default User;