import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { UserContext } from "../../context/UserContext";

// PÁGINA DONDE NOS VAMOS A PODER LOGUEAR CON NUESTRO EMAIL O POR GITHUB O GOOGLE o APPLE
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUserEmail, loginUserGoogle, setLoading, loading } =
    useContext(UserContext);

    // FUNCION PARA LOGUEARSE CON EMAIL Y CONTRASEÑA
  const handleLoginEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUserEmail(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
    } finally {
      setLoading(false);
    }
  };

  // FUNCION PARA LOGUARSE CON GOOGLE
  const handleLoginGoogle = async () => {
    setLoading(true);
    try {
      await loginUserGoogle();
      navigate("/");
    } catch (error) {
      console.log(error.code);
    } finally {
      setLoading(false);
    }
  };

  //FUNCION PARA CAMBIAR EL VALOR DEL ONCHANGE DE EL EMAIL
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // FUNCION PARA CAMBIAR EL VALOR DEL ONCHANGE DE EL PASSWORD
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Title title="Login" />

      <form onSubmit={handleLoginEmail}>
        <input
          type="text"
          onChange={handleEmailChange}
          value={email}
          placeholder="Ingresa tu email"
        />
        <input
          type="password"
          onChange={handlePassChange}
          value={password}
          placeholder="Ingresa tu contraseña"
        />

        <Button text={loading ? "Ingresando..." : "Ingresar"} />
      </form>

      {/* ACA HABRIA QUE HACER UN BEFORE O AFTER */}
      <span>O ingresa desde tu cuenta de Google</span>

      <button className="button_google" onClick={handleLoginGoogle}>
        <h3>Ingresa desde tu cuenta de Google</h3>
        <img alt="Google" />
      </button>


      <Link to="/register" >
        <span>Registrase clickeando este link</span>
      </Link>
    </div>
  );
};

export default Login;
