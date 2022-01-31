import React, {useEffect} from 'react';

import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/users.store";

export const Users = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.usersReducer);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <>
            <div>
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </>
    );
};
