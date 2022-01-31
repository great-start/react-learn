import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import css from "./Layout.module.css"

export const Layout = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={css.wrap}>
                <nav>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/posts'}>Posts</NavLink>
                </nav>
            </div>
            <div className={css.mainContent}>
                <Outlet/>
            </div>
        </>
    );
};
