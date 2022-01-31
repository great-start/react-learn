import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css";

export const Layout = () => {

    return (
        <>
            <div className={css.wrap}>
                <nav>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/posts'}>Posts</NavLink>
                    <NavLink to={'/comments'}>Comments</NavLink>
                    <NavLink to={'/cars'}>Cars</NavLink>
                </nav>
            </div>
            <div className={css.mainContent}>
                <Outlet/>
            </div>
        </>
    );
};
