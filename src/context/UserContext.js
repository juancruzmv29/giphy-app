/* eslint-disable react-hooks/exhaustive-deps */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/client"

// CONTEXTO DONDE VAMOS A EXPORTAR LAS FUNCIONES DEL LOGIN 
export const UserContext = createContext()

// USAMOS ESTE MINIHOOK PARA VER SI YA HAY UN CONTEXTO
export const useUser = () => {
    const context = useContext(UserContext)

    if(context === undefined) {
        throw new Error("useUser must be defined")
    }
    return context
}

// CREAMOS EL PROVDEEDOR
export const UserContextProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')


    // EFECTO PARQA MOSTRAR CADA VEZ QUE CAMBIE EL USER
    useEffect(() => {
      
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if(user) {
                const { email, photoURL, displayName, phoneNumber, uid } = user
                setUser({ email, photoURL, displayName, phoneNumber, uid })
            } else {
                setUser(null)
            }
        })
    
      return () => unsuscribe()
    }, [])
    

    // PARA REGISTRAR EL USUARIO
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    // PARA LOGUEARSE CON EL EMAIL
    const loginUserEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    // PARA LOGUEARSE CON GOOGLE
    const loginUserGoogle = () => {
        signInWithPopup(auth, provider)
    }

    // PARA DESLOGUEARSE
    const signOutUser = () => {
        signOut(auth)
    }


    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading, registerUser, loginUserEmail, loginUserGoogle, signOutUser }} >
            {children}
        </UserContext.Provider>
    )


}

