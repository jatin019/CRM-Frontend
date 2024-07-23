import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './entry.style.css';
import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
  const [frmLoad, setFrmLoad] = useState('login');
  
  const handleOnResetSubmit = e => {
    e.preventDefault();
  
  };

  const formSwitcher = frmType => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <Card style={{ backgroundColor: '#f0f0f0' }}> 
        <Card.Body className="custom-card-body">
          {frmLoad === 'login' && (
            <LoginForm 
              formSwitcher={formSwitcher}
            />
          )}
          {frmLoad === 'reset' && (
            <ResetPassword
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};