import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from "./Home.module.css"

const Home = () => {

    return (
        <>
            <div className={css.header}>
                <Link to={'episodes'}>Rick and Morty episodes</Link>
            </div>
            <div>
                <Outlet/>
            </div>
            <div className={css.footer}>
            </div>
        </>
    );
};

export {Home};