import React, {useEffect, useState} from 'react';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => setComments(comments))
    }, []);

    return (
        <div className={'comments'}>
            {
                comments.map(comment =>
                    <p key={comment.id}>CommentID:{comment.id} - {comment.name}</p>
                )}
        </div>
    );
};

export default Comments;