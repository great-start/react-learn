import React, {useEffect, useState} from 'react';
import {userServices} from "../services/user.services";

import User from "./User";

const Users = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userServices.getAll().then(response => console.log(response));
    }, []);


    return (
        <div>
            { users && users.map(user => <User key={user.id} user={user}/>) }
        </div>
    );
};

export default Users;