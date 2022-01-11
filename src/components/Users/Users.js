import React, {useEffect, useState} from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users));
    },[]);

    return (
        <div className={'users'}>
            {users.map(user =>
                <p key={user.id}>ID:{user.id} - {user.name}</p>
            )}
        </div>
    );
};

export default Users;