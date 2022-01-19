import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import css from "./App.module.css";
import Users from "./components/Users";
import Posts from "./components/Posts";

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
                    <Route path={'/'} />
                    <Route path={'/users'} element={<Users />}/>
                    <Route path={'/posts'} element={<Posts />}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
