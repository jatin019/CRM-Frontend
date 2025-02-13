import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import './login.style.css';

import { loginPending, loginSuccess, loginFail } from './loginSlice';
import { userLogin } from '../../api/userApi';
import { getUserProfile } from '../../pages/dashboard/userAction';

export const LoginForm = ({ formSwitcher }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, isAuth, error } = useSelector(state => state.login);

  useEffect(() => {
    if ( sessionStorage.getItem('accessJWT')) {
      history.push('/dashboard');
    }
  }, [history, isAuth]);

  const [email, setEmail] = useState('ravi@gmail.com');
  const [password, setPassword] = useState('password1');

  const handleOnChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Fill up all the form');
    }
    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.status === 'error') {
        return dispatch(loginFail(isAuth.message));
      }

      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push('/dashboard');
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Client Login</h1>
          <hr />
          {error && <Alert variant='danger'>{error}</Alert>}
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
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={password}
                onChange={handleOnChange}
                placeholder='Enter password'
                required
              />
            </Form.Group>
            <br />
            <Button type='submit'>Login</Button>
            {isLoading && <Spinner variant='primary' animation='border' />}
          </Form>
          <br />
          </Col>
          </Row>

          <Row>
            <Col>
         
          <a href='#!' onClick={() => formSwitcher('reset')}>
            Forget Password
          </a>
        </Col>
      </Row>
          <Row className = "py-4">
            <Col>
          Are you new here? {' '}
          <a href="/registration">
            Register Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};
