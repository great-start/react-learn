import {configureStore} from "@reduxjs/toolkit";

import usersReducer from "./users.store";

export const store = configureStore({
    reducer: {
        usersReducer
    }
})