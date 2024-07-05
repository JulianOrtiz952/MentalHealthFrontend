import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Thanks from './pages/Thanks';
import User from './pages/User';
import MoreInfo from './pages/MoreInfo';
import Alarms from './pages/Alarms';
import Calendar from './pages/Calendar';
import Food from './pages/Food';
import Rutines from './pages/Rutines';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log('Attempting to fetch data...');
      const response = await axios.get('http://localhost:8081/user');
      console.log('Response received:', response);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error details:', err);
      setError(`Error fetching data: ${err.message}`);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/alarms" element={<Alarms />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/food" element={<Food />} />
        <Route path="/rutines" element={<Rutines />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;