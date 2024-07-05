import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PageStyles.css';
import { Container } from 'react-bootstrap';

function Food()  {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/food');
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching user data');
      setLoading(false);
    }
  };

  const handlePost = async () => {
    try {
      const result = await axios.post('http://localhost:8081/food', {
        name: name,
        info: info
      });
      setResponse(result.data);
      setError(null);
      // Limpiar los campos después de una creación exitosa
      setName('');
      setInfo('');
      window.location.reload();
    } catch (err) {
      setError('Error en la petición POST: ' + err.message);
      setResponse(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (users.length === 0) return <div>No users available</div>;

  return (
    <div className="bg-image">
      <div className="contenedorPrincipal">
            <Container className=''>
              <div className='contenedorFood'>
                  {users.map((food, index) => (
                    <div className='' key={food.id || index}>
                        <p>Name: {food.name} / Info: {food.info} </p>
                  </div>
      ))}
    </div>
              </Container>
              <Container className='grid'>
        Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la comida"
      />
      Info:
      <input
        type="text"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        placeholder="info"
      />
      <button onClick={handlePost}>Publicar Comida</button>
      {response && <div>Rutina creada: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error}</div>}
      </Container>
      </div>
    </div>
  );
};

export default Food;