import React from "react";

import Post from "./Post";

function Posts({posts, showComments}) {

    return (
        <div className={'posts'}> {
                posts.map(post =>
                    <Post key={post.id} id={post.id} title={post.title} showComments={showComments} />
                )}
        </div>
    );
}

export default Posts;

