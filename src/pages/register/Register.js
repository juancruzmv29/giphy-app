import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import { UserContext } from '../../context/UserContext'

// PÁGINA DONDE VAMOS A PODER REGISTRARNOS
const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { registerUser, setLoading } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await registerUser(email, password)
            navigate("/")
        } catch (error) {
            console.log(error.code)
        } finally {
            setLoading(false)
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        setPassword(e.target.value)
    }


  return (
    <div>
        <Title title="Registrarse" />

        <form onSubmit={handleSubmitRegister} >
            <input type="text" onChange={handleEmailChange} value={email} />
            <input type="password" onChange={handlePassChange} value={password} />
            <Button text="Registrarse" />
        </form>

        <Link to="/login">
            <span>Ya tienes una cuenta, Ingresá con el siguiente link</span>
        </Link>
    </div>
  )
}

export default Register