import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticket-listing/ticketsSlice.js";
import loginReducer from "./components/login/loginSlice"
import userReducer from "./pages/dashboard/userSlice"
import newTicketReducer from './components/add-ticket-form/addTicketSlicer.js'
const store = configureStore({
    reducer: {
        tickets : ticketsReducer,
        login: loginReducer,
        user: userReducer,
        openTicket: newTicketReducer,
    },
})

export default store