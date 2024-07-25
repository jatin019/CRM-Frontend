
import { fetchTicketFail, 
    fetchTicketSuccess, 
    fetchTicketLoading,
    fetchSingleTicketFail,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
searchTickets, } from './ticketsSlice.js';
import {getAllTickets, getSingleTicket} from '../../api/ticketApi.js'


export const fetchAllTickets = () => async (dispatch) => {

    dispatch(fetchTicketLoading())
    
    try {
        ///fetch data from api

        const result = await getAllTickets()
            

                dispatch(fetchTicketSuccess(result.data.result))


    }catch (error) {
        dispatch(fetchTicketFail(error.message))
    }
}
export const filterSearchTicket = (str) => dispatch => {
    dispatch(searchTickets(str))
}


// Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {

    dispatch(fetchSingleTicketLoading())
    
    try {
    

        const result = await getSingleTicket(_id)
        console.log(result)
        

                dispatch(fetchSingleTicketSuccess(result.data.result))


    }catch (error) {
        dispatch(fetchSingleTicketFail(error.message))
    }
}

