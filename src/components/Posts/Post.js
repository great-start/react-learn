import React from 'react';
import {Link} from "react-router-dom";

import css from './Posts.module.css'

export const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div className={css.post}>
            <p><b>PostId: </b>{id}</p>
            <p><b>Title: </b>{title}</p>
            <Link to={`${id.toString()}`} state={{...post}}><button>Post Details</button></Link>
        </div>
    );
};

