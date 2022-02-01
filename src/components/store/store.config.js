import {configureStore} from "@reduxjs/toolkit";

import actionReducer from "./store.items";

export const store = configureStore({
    reducer: {
        actions: actionReducer
    }
})
