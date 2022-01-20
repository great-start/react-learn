import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {userServices} from "../services/user.services";
import {SingleUserPost} from "./SingleUserPost";

export const UserPosts = () => {

    const {state: {id}} = useLocation();
    const [userPosts, setUserPosts] = useState(null);

    useEffect(() => {
        userServices.getUserPosts(id).then(posts => setUserPosts(posts));
    }, [id])

    return (
        <>
            { userPosts && userPosts.map(post => <SingleUserPost key={post.id} post={post}/>) }
        </>
    )
};
