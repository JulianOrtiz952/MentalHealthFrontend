import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/PageStyles.css';

function Alarms() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [userId, setUserId] = useState(''); // Asumiendo que necesitamos el ID del usuario
  const [response, setResponse] = useState(null);
  

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/alarm');
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching user data');
      setLoading(false);
    }
  };
  const handlePost = async () => {
    try {
      const result = await axios.post('http://localhost:8081/alarm', {
        name: name,
        day: parseInt(day),
        time: parseFloat(time), 
        user: {
          id: parseInt(userId)
        }
      });
      setResponse(result.data);
      setError(null);
      // Limpiar los campos después de una creación exitosa
      setName('');
      setDay('');
      setTime('');
      setUserId('');
      window.location.reload();
    } catch (err) {
      setError('Error en la petición POST: ' + err.message);
      setResponse(null);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:8081/alarm/${id}`, {
      });
      setResponse(result.data);
      setError(null);
      window.location.reload();
    } catch (err) {
      setError('Error en la petición DELETE: ' + err.message);
      setResponse(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (users.length === 0) return <div>No users available</div>;

  return (
    <div className="bg-image">
      <div className=" contenedorRutinas" >
        <Row className="row">
          {/*columna 1 */}
          <Col className="rutines-box p-4 rounded">
              <h2>Alarms</h2>
              <Container className='contenedor'>
              <div>
      <h2></h2>
      {users.map((alarm, index) => (
        <div className="" key={alarm.id || index}>
          <h6 className='text-black'>Alarms {index + 1}</h6>
          <p className='info'>Name: {alarm.name} / Time: {alarm.time}
          <button className='addButton' onClick={() => handleDelete(index+1)}> - </button>
          {response && <div>Rutina creada: {JSON.stringify(response)}</div>}
          {error && <div>Error: {error}</div>}
          </p>
          
          {/* Añade más campos según la estructura de tus datos de usuario */}
        </div>
      ))}
    </div>
              </Container>
          </Col>
          {/* columna 2 */}
          <Col   className='rutines-box p-4 rounded align-items-center gap-2' >
            <h2> New Alarms</h2>
            <Container className ="" >
            <div>
      <Container className='grid'>
        Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la rutina"
      />
      Day:
      <input
        type="number"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        placeholder="Día (1-7)"
        min="1"
        max="7"
      />
      Time:
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Hora (0-23)"
        min="0"
        max="23"
      />
      User ID:
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="ID del usuario"
      />
      <button onClick={handlePost}>Crear Rutina</button>
      {response && <div>Rutina creada: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error}</div>}
      </Container>
    </div>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Alarms;