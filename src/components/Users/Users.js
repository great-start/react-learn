import React, {useEffect, useState} from 'react';

import User from "./User";

const Users = ({formData}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>
                setUsers([...users])
            );
    },[])

    useEffect(() => {
        setUsers(users.filter(user =>
            user.name.includes(formData.name) && user.username.includes(formData.username) && user.email.includes(formData.email)
        ));
    },[formData])

    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

export default Users;