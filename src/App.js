import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { UserContext } from "./context/UserContext";
import Error from "./pages/Error/Error";
import Favorites from "./pages/favorites/Favorites";
import Gif from "./pages/gif/Gif";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// FUNCION APP QUE CONTENDRA TODAS LAS RUTAS
function App() {
  return (
    <div className="App">
      <UserContext>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<Gif />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext>
    </div>
  );
}

export default App;
