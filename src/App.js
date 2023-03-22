import * as React from 'react';
import 'materialize-css';
import Global from './styles/global';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MainPage from './Pages/Main/';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Global />      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </Router> 
  );
}

export default App;
