import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import axios from 'axios';
import HomePage from './pages/HomePage';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
