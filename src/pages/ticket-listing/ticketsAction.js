
import { fetchTicketFail, 
    fetchTicketSuccess, 
    fetchTicketLoading,
searchTickets, } from './ticketsSlice.js';


import {getAllTickets} from '../../api/ticketApi.js'
export const fetchAllTickets = () => async (dispatch) => {

    dispatch(fetchTicketLoading())
    
    try {
        ///fetch data from api

        const result = await getAllTickets()
                console.log(result)

                dispatch(fetchTicketSuccess(result.data.result))


    }catch (error) {
        dispatch(fetchTicketFail(error.message))
    }
}

export const filterSearchTicket = (str) => dispatch => {
    dispatch(searchTickets(str))
}
