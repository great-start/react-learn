import React from "react";

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import './App.css';

function App() {
  return (
      <>
        <Users/>
        <Posts/>
        <Comments/>
      </>
  );
}

export default App;
