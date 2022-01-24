import React from "react";
import {Routes, Route} from "react-router-dom";

import './App.css';
import {EpisodeDetails, Episodes, Home} from "./Components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'episodes'} element={<Episodes/>}/>
                <Route path={'episodes/:id'} element={<EpisodeDetails/>}/>
            </Route>
        </Routes>
    );
}

export default App;
