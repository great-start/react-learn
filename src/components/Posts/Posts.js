import React, {useState, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import {Post} from "./Post";

import css from './Posts.module.css'

export const Posts = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getAll().then(posts => setPosts(posts));
    }, [])

    return (
        <>
            <div className={css.posts}>
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </>

    );
};

