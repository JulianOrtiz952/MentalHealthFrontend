import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/PageStyles.css';

const ForgotPassword = () => {
  return (
    <div className="bg-image">
      <Container className="text-center text-white">
        <h1>Forgot Password</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ForgotPassword;