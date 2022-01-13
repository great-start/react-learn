import React from "react";

import Post from "./Post";

function Posts({posts}) {

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post key={post.id} id={post.id} title={post.title}/>)
            }
        </div>
    );
}

export default Posts;

