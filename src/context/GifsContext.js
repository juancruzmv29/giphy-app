import { createContext, useState } from "react"

// CREAMOS EL CONTEXTO PARA LOS GIFS Y STICKERS
export const GifsContext = createContext() 

// CREAMOS EL PROVEEDOR DE GIFS Y STICKERS
export const GifsContextProvider = ({ children }) => {

    const [gifs, setGifs] = useState([])
    const [stickers, setStickers] = useState([])

    return (
        <GifsContext.Provider value={{ gifs, setGifs, stickers, setStickers }} >
            {children}
        </GifsContext.Provider>
    )
}

