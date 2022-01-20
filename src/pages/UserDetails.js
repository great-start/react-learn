import React from 'react';
import {Link,  Outlet, useLocation} from "react-router-dom";

import css from './pages.module.css'

export const UserDetails = () => {

    const {state} = useLocation();
    const {id, name, username, email} = state;

    return (
        <>
            <div className={css.userDetails}>
                <p><b>Id:</b> {id}</p>
                <p><b>Name:</b> {name}</p>
                <p><b>UserName:</b> {username}</p>
                <p><b>Email:</b> {email}</p>
                <Link to={'posts'} state={{...state}}><button>Show Posts</button></Link>
            </div>
            <hr/>
            <Outlet/>
        </>
    );
};
