import React from 'react';
import {Link} from "react-router-dom";

import css from './Users.module.css'

export const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
            <div className={css.user}>
                <h4>{id} -- {name}</h4>
                <h4>{username}</h4>
                <h4>{email}</h4>
            </div>
    );
};

