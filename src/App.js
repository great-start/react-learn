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

    function formHandler(form) {
        setUsers(() => {
            return users.filter(user =>
                user.name.includes(form.name) && user.username.includes(form.username) && user.email.includes(form.email)
            )
        })
    }

    return (
        <>
            <Form users={users} formHandler={formHandler}/>
            <Users users={users}/>
        </>
    );
}

export default App;
