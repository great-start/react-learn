import React, {useEffect} from 'react';

import {Comment} from "./Comment";
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../store";

export const Comments = () => {

    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(getAllComments());
    },[])

    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
