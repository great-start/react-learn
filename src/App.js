import React from "react";


import './App.css';
import Users from "./components/Users/Users";

function App() {

    const wife = {name:'Anna', age: 25}

    return (
        <>
            <Users>
                {wife}
                Jenya
            </Users>
        </>
    );
}

export default App;
