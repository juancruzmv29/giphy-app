import { createContext, useState } from "react"

// CREAMOS EL CONTEXTO PARA LOS GIFS
export const GifsContext = createContext() 

// CREAMOS EL PROVEEDOR DE GIFS
export const GifsContextProvider = ({ children }) => {

    const [gifs, setGifs] = useState([])

    return (
        <GifsContext.Provider value={{ gifs, setGifs }} >
            {children}
        </GifsContext.Provider>
    )
}

