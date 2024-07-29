import React from "react";
import { Card } from "react-bootstrap";
import RegistrationForm from "../../components/registration-form/RegistrationForm.comp";
import "./Registration.style.css";

export const Registration = () => {
  return (
    <div className="entry-page bg-info">
      <Card className="custom-card">
        <Card.Body className="custom-card-body">
          <RegistrationForm />
        </Card.Body>
      </Card>
    </div>
  );
};
