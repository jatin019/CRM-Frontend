import React from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Row, Col, FormGroup} from 'react-bootstrap'
import { filterSearchTicket } from '../../pages/ticket-listing/ticketsAction'

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {

    
    const { value} = e.target;

    dispatch(filterSearchTicket(value))
  }
   
  return (
    <div>
      <Form>
        <FormGroup as = {Row}>
            <Form.Label column sm = {3}>Search: </Form.Label>
            <Col sm = {9}>
            <Form.Control name='searchStr' 
            onChange={handleOnChange}
          
            placeholder='Search ...'/>
            </Col>

        </FormGroup>
      </Form>
    </div>
  )
}


