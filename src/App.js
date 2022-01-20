import React from "react";
import {Routes, Route} from "react-router-dom";

import {Albums, Comments, Layout, Photos, Posts, Users} from "./components";
import {PostDetails, UserDetails, UserPosts} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<Users/>}>
                    <Route path={':id'} element={<UserDetails/>}>
                        <Route path={'posts'} element={<UserPosts/>}/>
                    </Route>
                    <Route path={':id/albums'} element={<Albums/>}>
                        <Route path={':albumId/photos'} element={<Photos/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<Posts/>}>
                    <Route path={':id'} element={<PostDetails/>}>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
