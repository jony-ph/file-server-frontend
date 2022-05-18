import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/home';
import Login from './pages/login';
import Files from './pages/files';
import Settings from './pages/settings';

import NavigationBar from './components/Navbar';

import './App.css';

function App() {

  const [navbarFlag, setNavbarFlag] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar navbarFlag={navbarFlag} />
        <Routes>
          <Route path='/login' element={ <Login handle={setNavbarFlag} /> } />
          <Route path='/files' element={ <Files /> } />
          <Route path='/settings' element={ <Settings /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
