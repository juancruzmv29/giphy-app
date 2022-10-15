import React, { forwardRef } from "react";
import "./FormInput.scss";

// COMPONENTE PARA LOS INPUTS DE UN FORM, LE PASAMOS UNA REF YA QUE CUANDO RENDERIZEMOS DE NUEVO NO SE MODIFIQUE YA QUE ESUNA REFERENCIA. CREAMOS ESTE COMPONENTE PARA REUTILIZARLO DESPUES.
const FormInput = forwardRef(
  (
    { type, label, placeholder, onChange, onBlur, error, name, children },
    ref
  ) => {
    const errorClassLabel = error ? "font_error_label" : "font_label";

    const errorClassInput = error ? "border_error_input" : "border_input";

    return (
      <div>
        <label className={errorClassLabel}>{label}</label>
        <input
          className={errorClassInput}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
        {children}
      </div>
    );
  }
);

export default FormInput;
