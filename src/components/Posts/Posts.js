import React, {useEffect, useState} from "react";

import Post from "./Post";
// import {posts_service} from "../../services/posts_service";
import axios from "axios";

function Posts({userId, showComments}) {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(posts => setPosts(posts.data))
    }, [userId])

    return (
        posts &&
        <div className={'posts'}> {
            posts.map(post =>
                <Post key={post.id} id={post.id} title={post.title} showComments={showComments}/>
            )}
        </div>
    );
}

export default Posts;

