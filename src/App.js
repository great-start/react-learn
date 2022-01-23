import React from "react";
import {Routes, Route} from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home";
import Img from "./Components/Img/Img";

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
