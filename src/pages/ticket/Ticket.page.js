import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Button, Spinner, Alert} from 'react-bootstrap'
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp'
import { useDispatch , useSelector} from 'react-redux'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchSingleTicket } from '../ticket-listing/ticketsAction'

export const Ticket = () => {
    const dispatch = useDispatch()
    const {isLoading, error, selectedTicket} = useSelector(state => state.tickets)

    
    const {tid} = useParams();
  
    const [message, setMessage] = useState('');
    

    useEffect(() => {
        dispatch(fetchSingleTicket(tid));
    }, [tid, dispatch]);

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    }

    const handleOnSubmit = (e) => {
        alert('Form submitted!')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    {isLoading && <Spinner variant='primary' animation='border' />}
                    {error && <Alert variant='danger'> {error}</Alert>}
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
                    {selectedTicket && selectedTicket[0] && (
                        <>
                            <div className="subject">Subject: {selectedTicket[0].subject}</div>
                            <div className="date">Ticket Opened: {new Date(selectedTicket[0].conversations[0].msgAt).toLocaleString()}</div>
                            <div className="status">Status: {selectedTicket[0].status}</div>
                        </>
                    )}
                </Col>
                <Col className='text-right'>
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    {selectedTicket && selectedTicket[0] && selectedTicket[0].conversations && 
                        <MessageHistory msg={selectedTicket[0].conversations}/>
                    }
                </Col>
            </Row>
            <hr />
            <Row className='mt-4'>
                <Col>
                    <UpdateTicket 
                        msg={message}
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
}