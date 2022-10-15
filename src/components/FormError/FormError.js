import React from "react";
import "./FormError.scss"

// COMPONENTE DE ERRROR QUE VAMOS A PODER REUTILIZAR. LE PASAMOS EL ERROR
const FormError = ({error}) => {
  return (
    <>
      {error && (
        <p>
          <span></span>
          {error.message}
        </p>
      )}
    </>
  );
};

export default FormError;
