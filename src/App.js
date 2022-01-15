import React, {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {

    const [userId,setUserId] = useState(null);
    const [showComments,setShowComments] = useState(null);

    function showPosts(id) {
        setUserId(id);
        setShowComments(null);
    }

    return (
        <>
            <Users showPosts={showPosts}/>
            {userId && <Posts showComments={setShowComments} userId={userId}/>}
            {showComments && <Comments showComments={showComments}/>}
        </>
    );
}

export default App;
