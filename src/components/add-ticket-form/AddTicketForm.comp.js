import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import './add-ticket-form.style.css';
import { shortText } from '../../utility/validation';
import { openNewTicket } from './addTicketAction';
import { restSuccessMsg } from './addTicketSlicer';

const initialFrmDt = {
  subject: '',
  issueDate: '',
  message: '',
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();

  const { user: { name } } = useSelector(state => state.user);
  const { isLoading, error, successMsg } = useSelector(state => state.openTicket);
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  useEffect(() => {
    return () => {
      successMsg && dispatch(restSuccessMsg());
    }
  }, [frmData, frmDataError, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);
    const newFrmDataError = {
      ...initialFrmError,
      subject: !isSubjectValid,
    };

    setFrmDataError(newFrmDataError);

    if (isSubjectValid) {
      dispatch(openNewTicket({ ...frmData, sender: name }));
    } else {
      return;
    }
  };

  return (
    <Card className="mt-3 add-new-ticket bg-light">
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <hr />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="primary">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
      <Card.Body>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3} style={{ color: 'black' }}>
              Subject
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name="subject"
                value={frmData.subject}
                onChange={handleOnChange}
                placeholder="Subject"
                required
              />
              <Form.Text className='text-danger'>
                {frmDataError.subject && "Subject is required!"}
              </Form.Text>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Issue Found
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={frmData.issueDate}
                onChange={handleOnChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows="5"
              value={frmData.message}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <br />
          <Button type="submit" variant="info" className="w-100">
            Raise Ticket
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

// AddTicketForm.propTypes = {
//     handleOnSubmit: PropTypes.func.isRequired,
//     handleOnChange: PropTypes.func.isRequired,
//     frmDt: PropTypes.object.isRequired,
//     frmDataError: PropTypes.object.isRequired,
// }
