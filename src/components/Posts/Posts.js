import React, {useEffect, useState} from "react";

import Post from "./Post";
import {posts_service} from "../../services/posts_service";

function Posts({userId, showComments}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        posts_service.getAllById(userId)
            .then(posts => setPosts(posts))
    }, [userId])

    return (
        <div className={'posts'}> {
            posts.map(post =>
                <Post key={post.id} id={post.id} title={post.title} showComments={showComments}/>
            )}
        </div>
    );
}

export default Posts;

