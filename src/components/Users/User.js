import React from 'react';

import css from './User.module.css'


const User = ({user: {id, name}, showPosts}) => {

    return (
        <div className={css.user}>
            <p><b>Id:</b>{id} - <b>Name:</b>{name}.</p>
            <button onClick={() => showPosts(id)}>Show User Posts</button>
        </div>
    );
};

export default User;