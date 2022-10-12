import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'


// ACA ESTARA EL NAVBAR DE ARRIBA DONDE VAMOS A PODER LOGUERNOS O DESLOGUEARNOS
const Navbar = () => {

    const { user, signOutUser }  = useContext(UserContext)
    const navigate = useNavigate()

    // FUNCION PARA DESLOGUEARSE
    const handleLogout = async () => {
        try {
            await signOutUser()
            navigate("/home")
        } catch (error) {
            console.log(error.code)
        }
    }

    // SI EXISTE UN USUARIO RETORNAMOS UN NAVBAR ESPECIFICO CON EL BOTON DE DESLOGUEARSE
  if(user) return (
    <div className='navbar_logout'>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button onClick={handleLogout}>Logout</button>
    </div>
  ) 

  // SI EL USER NO EXISTE RETORNAMOS UN NAVBAR CON UN BOTON PARA IR A LOGUEARSE
  if(!user) return (
    <div className='navbar_login'>
        <Link to="/">Home</Link>
        <Link to="/login" >Login</Link>
        <Link to="/register" >Register</Link>
    </div>
  )
}

export default Navbar