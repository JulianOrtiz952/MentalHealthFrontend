import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/PageStyles.css'; // Asegúrate de crear este archivo para los estilos
import logo from '../assets/logo.jpg'; // Asegúrate de tener el logo en la carpeta assets

const Home = () => {
  return (
    <div className="bg-image">
      <Container className="text-center text-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="info-box p-4 rounded">
              <h2>Acerca de nosotros</h2>
              <p>
                Esta es una aplicación en búsqueda de contribuir a la salud de las personas a nivel general,
                basándonos en la salud mental y poniendo como pilares fundamentales el control de rutinas y algunas
                recomendaciones de comida, generando mejores hábitos.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img src={logo} alt="logo" className="rounded info-logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
