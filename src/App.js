import React from "react";
import {Routes, Route} from "react-router-dom";

import './App.css';
import Home from "./Components/Home";
import Img from "./Components/Img";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Home/>}>
              <Route path={':photos'} element={<Img/>}/>
          </Route>
      </Routes>
  );
}

export default App;
