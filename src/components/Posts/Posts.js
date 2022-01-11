import React, {useEffect, useState} from 'react';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, []);

    return (
        <div className={'posts'}>
            {posts.map(post =>
                <p key={post.id}>PostID:{post.id} - {post.title}</p>
            )}
        </div>
    );
};

export default Posts;