import React from 'react';
import {Link} from "react-router-dom";

import css from './Users.module.css'

export const User = ({user}) => {

    const {id, name} = user;

    return (
            <div className={css.user}>
                <h4>{id} -- {name}</h4>
                <Link to={id.toString()} state={{...user}}><button>Details</button></Link>
                <Link to={`${id.toString()}/albums`} state={{...user}}><button>Albums</button></Link>
            </div>
    );
};

