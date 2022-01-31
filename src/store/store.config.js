import {configureStore} from "@reduxjs/toolkit";

import usersStore from "./users.store";

export const store = configureStore({
    reducer: {
        usersStore
    }
})