import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {Comment} from "./Comment";
import {commentsService} from "../../services/comments.service";

export const Comments = () => {

    const {id} = useParams();
    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService.getAllComments(id).then(value => setComments(value))
    },[id])

    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
