import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { GifsContextProvider } from "./context/GifsContext";
import { UserContextProvider } from "./context/UserContext";
import Error from "./pages/Error/Error";
import Favorites from "./pages/favorites/Favorites";
import Gif from "./pages/gif/Gif";
import Gifs from "./pages/gifs/Gifs";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Sticker from "./pages/sticker/Sticker";
import Stickers from "./pages/stickers/Stickers";

// FUNCION APP QUE CONTENDRA TODAS LAS RUTAS
function App() {
  return (
    // USAMOS EL CONTEXTO DEL USER 
    <UserContextProvider>
      <div className="App">
        <Navbar />
        {/* USAMOS EL CONTEXTO QUE NOS VA A PROVEER LOS GIFS */}
        <GifsContextProvider>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gifs" element={<Gifs/>} />
            <Route path="/stickers" element={<Stickers/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/gifs/:id" element={<Gif />} />
            <Route path="/stickers/:id" element={<Sticker/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </GifsContextProvider>
      </div>
    </UserContextProvider>
  );
}

export default App;
