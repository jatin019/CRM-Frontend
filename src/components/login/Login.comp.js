import React from 'react'
import { PropTypes } from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './login.style.css';
export const LoginForm = ({handleOnChange, handleOnSubmit, email,pass,formSwitcher}) => {
  return (
   <Container>
    <Row>
        <Col>
        <h1 className='text-info text-center'>Client Login</h1>
        <hr />
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
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
            <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type='password'
            name='password'
            value={pass}
            onChange={handleOnChange}
            placeholder='Enter password'
            required
            />          
            </Form.Group>
            <br/>
        <Button type='submit' >Login</Button>
        </Form>
        <br />
        <a href='#!'onClick={() => formSwitcher('reset')}>
            Forget Password</a>
        </Col>
    </Row>   
     
  
   </Container>
  )
}
LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
};