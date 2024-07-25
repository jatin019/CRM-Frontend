import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tickets: [],
    searchTicketList: [],
    selectedTicket: [],
    isLoading: false,
    error: ''
}

const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        fetchTicketLoading: (state) => {
            state.isLoading = true;           

        },
         fetchTicketSuccess:  (state, action) => {
            state.tickets = action.payload
            state.searchTicketList = action.payload
            state.isLoading = false;           

        },


        fetchTicketFail:  (state, { payload }) => {
           state.isLoading = false; 
           state.error = payload;          

        },
        searchTickets:  (state, { payload }) => {
         state.searchTicketList = state.tickets.filter((row) => {
            if (!payload) return row;

            return row.subject.toLowerCase().includes(payload.toLowerCase())
         })      

        },
        
        fetchSingleTicketLoading: (state) => {
            state.isLoading = true;           

        },
         fetchSingleTicketSuccess:  (state, {payload}) => {
            state.selectedTicket = payload
            state.isLoading = false;   
            state.error = "";     

        },


        fetchSingleTicketFail:  (state, { payload }) => {
           state.isLoading = false; 
           state.error = payload;          

        },



    }

})

const {reducer, actions} = ticketListSlice;

export const {
    fetchTicketFail, 
    fetchTicketSuccess, 
    fetchTicketLoading,
    searchTickets,
    fetchSingleTicketFail,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
} = actions;

export default reducer