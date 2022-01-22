import React, {useContext} from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import css from "./Layout.module.css"
import RequireAuthentication from "../hoc/RequireAuthentication";
import {Context} from "../hoc/AuthProvider";

export const Layout = () => {

    const {LogOut} = useContext(Context);
    const navigate = useNavigate();

    const handler = () => {
        LogOut(() => navigate('/', {replace: true}) );
    }

    return (
        <>
            <div className={css.wrap}>
                <nav>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/posts'}>Posts</NavLink>
                    <button onClick={handler}>LogOut</button>
                </nav>
            </div>
            <RequireAuthentication>
                <div className={css.mainContent}>
                    <Outlet/>
                </div>
            </RequireAuthentication>
        </>
    );
};
