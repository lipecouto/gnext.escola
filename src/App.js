import * as React from 'react';

import Global from './styles/global';
import Login from './Pages/Login';
import Register from './Pages/Register';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Global />
      <Routes>
        
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
    </Router> 
  );
}

export default App;
