import React, {useEffect, useState} from 'react';

import User from "./User";
import axios from "axios";

function Users({showPosts}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users => setUsers(users.data));
    },[])

    return (
        <div className={'users'}> {
            users.map(user =>
                <User key={user.id} user={user} showPosts={showPosts}/>
            )}
        </div>
    );
}

export default Users;