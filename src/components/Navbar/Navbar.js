import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Navbar.scss";

// ACA ESTARA EL NAVBAR DE ARRIBA DONDE VAMOS A PODER LOGUERNOS O DESLOGUEARNOS
const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  // FUNCION PARA DESLOGUEARSE
  const handleLogout = async () => {
    try {
      await signOutUser();
      navigate("/home");
    } catch (error) {
      console.log(error.code);
    }
  };

  // SI EXISTE UN USUARIO RETORNAMOS UN NAVBAR ESPECIFICO CON EL BOTON DE DESLOGUEARSE
  if (user)
    return (
      <div className="navbar">
        <Link className="navbar_link" to="/">
          Home
        </Link>
        <Link className="navbar_link" to="/favorites">
          Favorites
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );

  // SI EL USER NO EXISTE RETORNAMOS UN NAVBAR CON UN BOTON PARA IR A LOGUEARSE
  if (!user)
    return (
      <div className="navbar">
        <Link className="navbar_link" to="/">
          Home
        </Link>
        <Link className="navbar_link" to="/login">
          Login
        </Link>
        <Link className="navbar_link" to="/register">
          Register
        </Link>
      </div>
    );
};

export default Navbar;
