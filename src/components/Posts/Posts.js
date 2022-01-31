import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "./Post";
import css from './Posts.module.css'
import {getAllPosts} from "../../store";

export const Posts = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.postsReducer);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    return (
        <div className={css.posts}>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

