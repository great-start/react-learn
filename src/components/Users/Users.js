import React, {useEffect, useState} from 'react';

import User from "./User";
import css from './Users.module.css'
import {users_service} from "../../services/users_service";

function Users({showPosts}) {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        users_service.getAll().then(users => setUsers(users));
    },[])

    return (
        users &&
        <div className={css.users}> {
            users.map(user =>
                <User key={user.id} user={user} showPosts={showPosts}/>
            )}
        </div>
    );
}

export default Users;