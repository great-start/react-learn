import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Comment} from "./Comment";
import {getAllComments} from "../../store";
import css from './Comments.module.css';

export const Comments = () => {

    const dispatch = useDispatch();
    const {comments, errorComments} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(getAllComments());
    },[])

    return (
        <>
            {errorComments && <div>{errorComments}</div>}
            <div className={css.comments}>
                {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </>
    );
};
