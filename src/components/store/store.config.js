import {configureStore} from "@reduxjs/toolkit";

import actionReducer from "./store.items";

const store = configureStore({
    reducer: {
        actions: actionReducer
    }
})

export default store;