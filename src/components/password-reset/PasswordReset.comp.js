import React from 'react'
import { PropTypes } from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './PasswordReset.style.css';
export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
  return (
   <Container>
    <Row>
        <Col>
        <h1 className='text-info text-center'>Reset Password</h1>
        <hr />
        <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
            <Form.Group>
            <Form.Label style={{ color: 'black' }}>Email Address</Form.Label>
            <Form.Control
            type='email'
            name='email'
            value={email}
            onChange={handleOnChange}
            placeholder='Enter email'
            required
           />          
            </Form.Group>
            
            <br/>
        <Button type='submit' >Reset Password</Button>
        </Form>
        <br />
        <a href='#!'onClick={() =>formSwitcher('login')}>
            Login Now</a>
        </Col>
    </Row>   
     
  
   </Container>
  )
}
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
    
};