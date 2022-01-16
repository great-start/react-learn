import React, {useEffect, useState} from 'react';

import User from "./User";
import axios from "axios";

function Users({showPosts}) {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users => setUsers(users.data));
    },[])

    return (
        users &&
        <div className={'users'}> {
            users.map(user =>
                <User key={user.id} user={user} showPosts={showPosts}/>
            )}
        </div>
    );
}

export default Users;