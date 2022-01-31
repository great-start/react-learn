import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import css from './pages.module.css'
import {userServices} from "../services";

export const UserDetails = () => {

    const {state} = useLocation();
    const {id : Id} = useParams();
    // const [params, setParams] = useSearchParams();
    // setParams({name:'vanya'});

    const [user, setUser] = useState({});

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        userServices.getSingleUser(Id).then(user => setUser(user));
    }, [Id]);

    return (
        <>
            <div className={css.userDetails}>
                <p><b>Id:</b> {user.id}</p>
                <p><b>Name:</b> {user.name}</p>
                <p><b>UserName:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <Link to={'posts'} state={{...state}}><button>Show Posts</button></Link>
            </div>
            <hr/>
            <Outlet/>
        </>
    );
};
