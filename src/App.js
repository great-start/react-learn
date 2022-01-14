import React, {useEffect, useState} from "react";

import Users from "./components/Users/Users";
// import Posts from "./components/Posts/Posts";
// import Comments from "./components/Comments/Comments";
import './App.css';

function App() {

    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({name: '', username: '', email: ''});


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    },[])

    function formHandler(e) {
        e.preventDefault();
        // setUsers(() => {
        //     return users.filter(user =>
        //         console.log(user.name.includes(form.name))
        //     )
        // })
        console.log(form);
        console.log(users);
    }

    function handlerInput(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div>
                <form onSubmit={formHandler}>
                    <label>Name: <input type="text" name={'name'} onChange={handlerInput}/></label>
                    <label>Username: <input type="text" name={'username'} onChange={handlerInput}/></label>
                    <label>Email: <input type="text" name={'email'} onChange={handlerInput}/></label>
                    <button>Send</button>
                </form>
            </div>
            <div className={'users'}>
                <Users users={users}/>
            </div>
        </>
    );
}

export default App;
