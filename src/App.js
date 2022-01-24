import React from "react";
import {Routes, Route} from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home";
import Episodes from "./Components/Episode/Episodes";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'episode'} element={<Episodes/>}/>
            </Route>
        </Routes>
    );
}

export default App;
