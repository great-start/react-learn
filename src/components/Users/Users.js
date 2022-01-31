import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";

import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/users.store";

export const Users = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.usersReducer);

    console.log(users);

    useEffect(() => {
        dispatch(getAllUsers);
    }, []);

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
