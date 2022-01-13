import React, {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {posts_service} from "./services/posts_service";

function App() {

    const [posts,setPosts] = useState(null);

    function showPosts(id) {
        posts_service.getAllById(id)
            .then(posts => setPosts(posts));
    }

    return (
        <>
            <Users showPosts={showPosts}/>
            {posts && <Posts posts={posts}/> }
        </>
    );
}

export default App;
