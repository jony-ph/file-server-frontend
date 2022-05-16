import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
