import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {SingleUserPost} from "./SingleUserPost";
import {userServices} from "../services";

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
