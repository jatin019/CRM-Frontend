import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { useDispatch, useSelector } from 'react-redux';
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from 'react-router-dom';
import { closeTicket, fetchSingleTicket } from '../ticket-listing/ticketsAction';

export const Ticket = () => {

    const dispatch = useDispatch();
    const { isLoading, error, selectedTicket, replyMsg, replyTicketError} = useSelector(state => state.tickets);
    const { tid } = useParams();

    useEffect(() => {
        dispatch(fetchSingleTicket(tid));
    }, [tid, dispatch]);

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    {isLoading && <Spinner variant="primary" animation="border" />}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {replyTicketError && <Alert variant="danger">{replyTicketError}</Alert>}
                    {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
                </Col>
            </Row>
            <Row>
                <Col className="font-weight-bold text-secondary">
                    {selectedTicket?.[0] && (
                        <>
                            <div className="subject">Subject: {selectedTicket[0].subject}</div>
                            <div className="date">Ticket Opened: {new Date(selectedTicket[0].conversations[0].msgAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })}</div>
                            <div className="status">Status: {selectedTicket[0].status}</div>
                        </>
                    )}
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info" onClick={() => dispatch(closeTicket(tid))} disabled={selectedTicket?.[0]?.status === "Closed"}>Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {selectedTicket?.[0]?.conversations && 
                        <MessageHistory msg={selectedTicket[0].conversations} />
                    }
                </Col>
            </Row>
            <hr />
            <Row className="mt-4">
                <Col>
                    <UpdateTicket _id={tid} />
                </Col>
            </Row>
        </Container>
    );
};
