import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userServices} from "../services/user.services";
import {SingleUserPost} from "./SingleUserPost";

export const UserPosts = () => {

    const {id} = useParams();
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
