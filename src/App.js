import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import {Comments, Layout, Posts, Users} from "./components";
import Cars from "./components/Cars/Cars";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'posts'} element={<Posts/>}/>
                <Route path={'comments'} element={<Comments/>}/>
                <Route path={'cars'} element={<Cars/>}/>
            </Route>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
}


export default App;
