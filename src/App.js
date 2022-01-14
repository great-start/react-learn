import React, {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import {posts_service} from "./services/posts_service";
import {comments_service} from "./services/comments_service";

function App() {

    const [posts, setPosts] = useState(null);
    const [comments, setComments] = useState(null);

    function showPosts(id) {
        posts_service.getAllById(id)
            .then(posts => setPosts(posts));
    }

    function showComments(id) {
        comments_service.getAllById(id)
            .then(comments => setComments(comments))
    }

    return (
        <>
            <Users showPosts={showPosts}/>
            {posts && <Posts posts={posts} showComments={showComments}/>}
            {comments && <Comments comments={comments}/>}
        </>
    );
}

export default App;
