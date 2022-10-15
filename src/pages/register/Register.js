import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormError from "../../components/FormError/FormError";
import FormInput from "../../components/FormInput/FormInput";
import Title from "../../components/Title/Title";
import { UserContext } from "../../context/UserContext";
import { errorsFirebase } from "../../utils/errorsFirebase";
import { formValidate } from "../../utils/formValidate";
import "./Register.scss";

// PÁGINA DONDE VAMOS A PODER REGISTRARNOS
const Register = () => {
  const { registerUser, setLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm();
  const { required, pattern, minLength, maxLength, validateEquals } =
    formValidate();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await registerUser(data.email, data.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      // LLAMAMOS ERRORSFIREBASE CON CODE Y MESSAGE
      const { code, message } = errorsFirebase();
      // SETEAMOS EL ERROR Y ADENTRO LE PASAMOS EL CODE Y MESSAGE
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
      <Title title="Registrarse" />

      {/* FORMULARIO PARA REGISTRARNOS */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          placeholder="Ingresa tu email"
          label="Email"
          {...register("email", { required: required, pattern: pattern })}
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingresa tu password"
          label="Password"
          {...register("password", {
            required: required,
            minLength: minLength,
            maxLength: maxLength,
          })}
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingresa de nuevo tu password"
          label="Repetir password"
          {...register("repassword", {
            required: required,
            validate: validateEquals(getValues("password")),
          })}
          errors={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        <Button text="Registrarse" />
      </form>
    </div>
  );
};

export default Register;
