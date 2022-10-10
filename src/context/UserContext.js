import { createContext, useContext } from "react"
import firebase from "../firebase/client"

// CONTEXTO DONDE VAMOS A EXPORTAR LAS FUNCIONES DEL LOGIN 
export const UserContext = createContext()

export const useUser = () => {
    const context = useContext(UserContext)

    if(context === undefined) {
        throw new Error("useUser must be defined")
    }
    return context
}

export const UserContextProvider = () => {}
