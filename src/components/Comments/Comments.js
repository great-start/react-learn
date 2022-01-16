import React, {useEffect, useState} from 'react';

import Comment from "./Comment";
import {comments_service} from "../../services/comments_service";

const Comments = ({showComments}) => {

    const [comments, setComments] = useState(null);

    useEffect(() => {
        comments_service.getAllById(showComments).then(comments => setComments(comments))
    },[showComments])

    return (
        comments &&
        <div className={'comments'}>
            {
                comments.map(comment =>
                    <Comment key={comment.id} comment={comment} />
                )
            }
        </div>
    );
};

export default Comments;