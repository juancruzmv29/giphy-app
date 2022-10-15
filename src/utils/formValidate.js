// FUNCION QUE VAMOS A EXPORTAR QUE RETORNARA OBJETOS QUE VAN A SER LAS VALIDACIONES Y ADENTRO SUS RESP3ECTIVOS VALORES Y MENSAJES
export const formValidate = () => {
    return {
        required: {
            value: true,
            message: "Este campo es obligatorio" 
        },
        pattern: {
            value: /[a-z0-9]}+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "El email debe tener los caracteres correctos"
        },
        minLength: {
            value: 6,
            message: "La contraseña debe tener más de 6 caracteres"
        },
        maxLength: {
            value: 14,
            message: "La contraseña debe tener menos de 14 caracteres"
        },
        validateEquals(value) {
            return {
                equals: v =>
                    v === value || "No coinciden las contraseñas",
                    message: "No coinciden las contraseñas"
            }
        }

    }
}