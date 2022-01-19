import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import css from "./App.module.css"

function App() {
    return (
        <>
            <div className={css.wrap}>
                <ul>
                    <li><Link to={'/users'}>Users</Link></li>
                    <li><Link to={'/posts'}>Posts</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'/users'} element={''}/>
                    <Route path={'/posts'} element={''}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
