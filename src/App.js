import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Error404 from './pages/Page404';
import Private from './components/Private';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<Private/>}>
          <Route path='/user' element={<User />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;