import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import { replyOnTicket } from '../../pages/ticket-listing/ticketsAction'

export const UpdateTicket = ({_id}) => {

  const dispatch = useDispatch()
  const {user: {name}, } = useSelector(state => state.user)

  const [message, setMessage] = useState('')
  

  const handleOnChange = (e) => {
    setMessage(e.target.value);
}

const handleOnSubmit = (e) => {
  e.preventDefault()
 const  msgObj = {
    message,
    sender: name
  }
  dispatch(replyOnTicket(_id, msgObj))
  setMessage("")
   
}

  return (
   
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label><br />
       
        <Form.Text>Please write a reply here or update the ticket</Form.Text>
        <Form.Control
        as="textarea"
        value={message}
        onChange={handleOnChange}
        row="5"
        name='detail' />
        <div className="text-right mt-3 mb-3">
        <Button variant='info' type="submit">Reply</Button>
        </div>
        
    </Form>
   
  )
}


UpdateTicket.propTypes = {
    _id: PropTypes.string.isRequired,
    
}