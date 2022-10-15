import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { UserContext } from "../../context/UserContext";
import "./Login.scss";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import { errorsFirebase } from "../../utils/errorsFirebase";
import { formValidate } from "../../utils/formValidate";
import FormError from "../../components/FormError/FormError";

// PÁGINA DONDE NOS VAMOS A PODER LOGUEAR CON NUESTRO EMAIL O POR GITHUB O GOOGLE o APPLE
const Login = () => {
  // INVOCAMOS USENAVIGATE
  const navigate = useNavigate();
  // INVOCAMOS LAS FUNCIONES DE USE FORM
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // INVOCAMOS FORMVALIDATE Y LO QUE RETORNA
  const { required, maxLength, minLength, pattern } = formValidate();
  // INVOCAMOS LAS FUNCIONES DE LOGIN DEL USERCONTEXT
  const { loginUserEmail, loginUserGoogle, setLoading, loading } =
    useContext(UserContext);

  // FUNCION PARA LOGUEARSE CON EMAIL Y CONTRASEÑA
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await loginUserEmail(data.email, data.password);
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
      const { code, message } = errorsFirebase();
      setError(code, {
        message: message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* TITULO */}
      <Title title="Login" />
      {/* FORMULARIO PARA LOGUEARNOS */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese su email"
          label="Email"
          error={errors.email}
          {...register("email", { required: required, pattern: pattern })}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingrese su contraseña"
          label="contraseña"
          error={errors.password}
          {...register("password", {
            required: required,
            maxLength: maxLength,
            minLength: minLength,
            pattern: pattern,
          })}
        >
          <FormError error={errors.email} />
        </FormInput>
        <Button text={loading ? "Ingresando..." : "Ingresar"} />
      </form>

      {/* ACA HABRIA QUE HACER UN BEFORE O AFTER */}
      <span>O ingresa desde tu cuenta de Google</span>
      
      {/* BOTON PARA LOGUEARNOS CON GOOGLE */}
      <button className="button_google" onClick={handleLoginGoogle}>
        <h3>Ingresa desde Google</h3>
        <img className="logo" src={logo} alt="Google" />
      </button>
    </div>
  );
};

export default Login;
