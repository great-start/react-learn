import React from 'react';
import {Link, useLocation, Outlet} from "react-router-dom";

import css from './pages.module.css'

export const PostDetails = () => {

    const {state} = useLocation();
    const {id, title, body} = state;

    return (
        <>
            <div className={css.postDetails}>
                <p><b>PostId: </b>{id}</p>
                <p><b>Title: </b>{title}</p>
                <p><b>Body: </b>{body}</p>
                <Link to={'comments'} state={{...state}}><button>Comments</button></Link>
            </div>
            <hr/>
            <div>
                <Outlet/>
            </div>
        </>


    );
};
