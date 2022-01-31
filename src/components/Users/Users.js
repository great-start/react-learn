import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {User} from "./User";
import {userServices} from "../../services/user.services";

export const Users = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userServices.getAll().then(response => setUsers(response));
    }, []);

    if (!users) { return null }

    return (
        <>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};
