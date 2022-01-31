import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {User} from "./User";
import css from './Users.module.css';
import {getAllUsers} from "../../store/users.store";

export const Users = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.usersReducer);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className={css.users}>
            {users && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};
