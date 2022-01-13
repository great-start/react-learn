import React, {useEffect, useState} from 'react';

import {users_service} from "../../services/users_service";
import User from "./User";

function Users({showPosts}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        users_service.getAll()
            .then(users => setUsers(users));
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