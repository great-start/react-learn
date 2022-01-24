import React from 'react';
import {Outlet} from "react-router-dom";

import css from "./Home.module.css"

const Home = () => {

    return (
        <>
            <div className={css.top}>
                Home
            </div>
            <>
                <Outlet/>
            </>
        </>
    );
};

export default Home;