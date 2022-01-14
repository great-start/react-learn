import React, {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import {comments_service} from "./services/comments_service";

function App() {

    const [comments, setComments] = useState(null);

    function showComments(id) {
        comments_service.getAllById(id)
            .then(comments => setComments(comments))
    }

    // const [posts, setPosts] = useState(null);
    //
    // function showPosts(id) {
    //     posts_service.getAllById(id)
    //         .then(posts => setPosts(posts));
    // }

    const [id,setID] = useState(null);


    return (
        <>
            <Users showPosts={setID}/>
            <Posts showComments={showComments} userId={id}/>
            {comments && <Comments comments={comments}/>}
        </>
    );
}

export default App;
