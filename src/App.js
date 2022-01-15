import React, {useState} from "react";

import Users from "./components/Users/Users";
import './App.css';
import Form from "./components/Form/Form";

function App() {

    const [formData,setFormData] = useState({});

    return (
        <>
            <Form formHandler={setFormData}/>
            <Users formData={formData}/>
        </>
    );
}

export default App;
