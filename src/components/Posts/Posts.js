import React, {useEffect} from 'react';

import {Post} from "./Post";
import css from './Posts.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store/posts.store";

export const Posts = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.postsReducer);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    return (
        <>
            <div className={css.posts}>
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </>
    );
};

