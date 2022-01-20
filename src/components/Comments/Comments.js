import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import {Comment} from "./Comment";

export const Comments = () => {

    const {postId} = useParams();
    const [comments,setComments] = useState(null);

    useEffect(() => {
        postsService.getAll(postId).then(value => setComments(value))
    },[postId])

    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
