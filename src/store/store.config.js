import {configureStore} from "@reduxjs/toolkit";

import usersReducer from "./users.store";
import postsReducer from "./posts.store";
import commentsReducer from "./comments.store";

export const store = configureStore({
    reducer: {
        usersReducer,
        postsReducer,
        commentsReducer
    }
})