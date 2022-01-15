import React, {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import css from './App.module.css';

function App() {

    const [userId,setUserId] = useState(null);
    const [showComments,setShowComments] = useState(null);

    function showPosts(id) {
        setUserId(id);
        setShowComments(null);
    }

    return (
        <div className={css.wrap}>
            <Users showPosts={showPosts}/>
            {userId && <Posts showComments={setShowComments} userId={userId}/>}
            {showComments && <Comments showComments={showComments}/>}
        </div>
    );
}

export default App;
