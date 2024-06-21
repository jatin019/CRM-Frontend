import React from 'react'
import { Form ,Row, Col, FormGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'
export const SearchForm = ({handleOnChange, str}) => {
   
  return (
    <div>
      <Form>
        <FormGroup as = {Row}>
            <Form.Label column sm = {3}>Search: </Form.Label>
            <Col ms = {9}>
            <Form.Control name='searchStr' 
            onChange={handleOnChange}
            value={str}
            placeholder='Search ...'/>
            </Col>

        </FormGroup>
      </Form>
    </div>
  )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}

