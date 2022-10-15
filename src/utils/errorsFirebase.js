export const errorsFirebase = (code) => {
        switch (code) {
            case "auth/internal-error":
                return {
                    code: "email",
                    message: "No se pudo procesar la solicitud"
                }
            case "auth/email-already-exists":
                return {
                    code: "email",
                    message: "Otro usuario ya esta utilizando la direccion de correo"
                }
            case "auth-invalid-email":
                return {
                    code: "email",
                    message: "email no válido"
                }
            case "invalid-password":
                return {
                    code: "password",
                    message: "password no váalido"
                }
            default:
                return {
                    code: "email",
                    message: "Ocurrio un error en el server"
                }
        }
}
