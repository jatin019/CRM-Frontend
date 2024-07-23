import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticket-listing/ticketsSlice.js";

const store = configureStore({
    reducer: {
        tickets : ticketsReducer,
    },
})

export default store