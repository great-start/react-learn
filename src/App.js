import React, {useEffect, useState} from "react";

import Users from "./components/Users/Users";
import './App.css';
import Form from "./components/Form/Form";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    },[])

    return (
        <>
            <Form setUsers={setUsers} users={users}/>
            <Users users={users}/>
        </>
    );
}

export default App;
