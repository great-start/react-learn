import React, {useEffect, useState} from 'react';
import {Link, useLocation, Outlet, useParams} from "react-router-dom";

import css from './pages.module.css';
import {postsService} from "../services";

export const PostDetails = () => {

    const {state} = useLocation();
    const {id : Id} = useParams();
    const [postDetail, setPostDetails] = useState(null);

    useEffect(() => {
        if (state) {
            setPostDetails(state);
            return;
        }
        postsService.getSinglePost(Id).then(post => setPostDetails(post));
    }, [Id])

    return (
        <>
            {postDetail && <div className={css.postDetails}>
                <p><b>PostId: </b>{postDetail.id}</p>
                <p><b>Title: </b>{postDetail.title}</p>
                <p><b>Body: </b>{postDetail.body}</p>
                <Link to={'comments'}>
                    <button>Comments</button>
                </Link>
            </div>}
            <hr/>
            <div>
                <Outlet/>
            </div>
        </>
    );
};
