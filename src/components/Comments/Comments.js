import React, {useEffect, useState} from 'react';

import Comment from "./Comment";
import axios from "axios";

const Comments = ({showComments}) => {

    const [comments, setComments] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${showComments}/comments`)
            .then(comments => setComments(comments.data))
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