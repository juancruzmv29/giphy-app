import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './pages/Error/Error';
import Favorites from './pages/favorites/Favorites';
import Gif from './pages/gif/Gif';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

// FUNCION APP QUE CONTENDRA TODAS LAS RUTAS
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/:id' element={<Gif/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
