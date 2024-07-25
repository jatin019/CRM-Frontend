import {
    fetchTicketFail, 
    fetchTicketSuccess, 
    fetchTicketLoading,
    fetchSingleTicketFail,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    replyTicketFail,
    replyTicketSuccess,
    replyTicketLoading,
    closeTicketFail,
    closeTicketSuccess,
    closeTicketLoading,
    searchTickets
} from './ticketsSlice.js';

import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClosed } from '../../api/ticketApi.js';

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const result = await getAllTickets();
        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error.message));
    }
};

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
};

export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
        const result = await getSingleTicket(_id);
        dispatch(fetchSingleTicketSuccess(result.data.result.length && result.data.result));
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message));
    }
};

export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
        const result = await updateReplyTicket(_id, msgObj);
        if (result.status === 'error') {
            return dispatch(replyTicketFail(result.message));
        }
        dispatch(fetchSingleTicket(_id));
        dispatch(replyTicketSuccess(result.message));
    } catch (error) {
        dispatch(replyTicketFail(error.message));
    }
};

export const closeTicket = (_id) => async (dispatch) => {
    dispatch(closeTicketLoading());
    try {
        const result = await updateTicketStatusClosed(_id);
        if (result.status === 'error') {
            return dispatch(closeTicketFail(result.message));
        }
        dispatch(fetchSingleTicket(_id));
        dispatch(closeTicketSuccess(result.message));
    } catch (error) {
        dispatch(closeTicketFail(error.message));
    }
};
