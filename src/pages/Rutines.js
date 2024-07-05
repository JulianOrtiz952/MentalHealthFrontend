import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/PageStyles.css'; // Asegúrate de tener este archivo para los estilos

const Rutines = () => {
  return (
    <div className="bg-image">
      <div className=" contenedorRutinas" >
        <Row className="align-items-center w-full">
          <Col md={4} className="rutines-box p-4 rounded">
              <h2>Esta Semana</h2>
              {/* Aquí puedes agregar más contenido o componentes */}
            <Container className='contenedor1 p-4 rounded ' >
            <div class="day">
              <h6 class="textday">Monday</h6> 
              </div>
            <div class="day">
            <h6 class="textday">Tuesday</h6> 
            </div>
            <div class="day">
            <h6 class="textday">Wednesday</h6> 
            </div>
            <div class="day">
            <h6 class="textday">Thursday</h6> 
            </div>
            <div class="day">
            <h6 class="textday">Friday</h6> 
            </div>
            <div class="day">
            <h6 class="textday">Saturday</h6> 
            </div>
            <div class="day">
            <h6 class="textday">Sunday</h6> 
            </div>
            </Container>
          </Col>
          <Col  className='rutines-box p-4 rounded align-items-center gap-2' >
            <h2> Routines</h2>
            <Container className='p-4 rounded' style={{backgroundColor:'white', height:"80%"}}/>
            <Button className='addButton'>
              add
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Rutines;
