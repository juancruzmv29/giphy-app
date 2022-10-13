import React from 'react'
import "./Button.scss"

// COMPONENTE DE BOTON QUE VAMOS A REUTILIZAR
const Button = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

export default Button