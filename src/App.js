import React from "react";
import {Provider} from "react-redux";

import './App.css';
import {Cars, Form} from "./components";

function App() {

    return (
        <>
            <Form/>
            <Cars/>
        </>
    );
}

export default App;
