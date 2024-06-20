import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './add-ticket-form.style.css';

export const AddTicketForm = ({ handleOnSubmit, handleOnChange,frmDt,frmDataError }) => {
  console.log(frmDt);
    return (
    <Card className="mt-3 add-new-ticket bg-light" >
        <h1 className='text-info text-center'>Add New Ticket</h1>
        <hr />
      <Card.Body>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3} style={{ color: 'black' }}>
              Subject
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name="subject"
                //minLength={3}
                value={frmDt.subject}
                onChange={handleOnChange}
                placeholder="Subject"
                required
              />
              <Form.Text className='text-danger'>{frmDataError.subject && "Subject is required!" } </Form.Text>
     
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
                value={frmDt.date}
                onChange={handleOnChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              name="detail"
              rows="5"
              value={frmDt.detail}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <br />
          <Button type="submit" variant="info" block>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
}