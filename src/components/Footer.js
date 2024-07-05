import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p>&copy; 2024 HealthApp. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;