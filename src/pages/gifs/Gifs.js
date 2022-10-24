import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import "./Gifs.scss"

// PÁGINA DE GIFS DONDE TAMBIEN PODREMOS BUSCAR
const Gifs = () => {
    const [search, setSearch] = useState("")


    // PARA CAMBIAR EL VALOR DE LO QUE VAMOS A BUSCAR
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    // PARA CUANDO ENVIAMOS EL FORMULARIO PARA BUSCAR LOS GIFS ESPECIFICOS
    const handleSearchSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>

        <Title title="Busca Gifs!" />

        {/* FORMULARIO PARA BUSCAR LOS GIFS ESPECIFICOS */}
        <form onSubmit={handleSearchSubmit} >
            <input type="text" onChange={handleChange} value={search} placeholder="Busca gifs" />
            <button>Buscar</button>
        </form>

        {/* DONDE VAN A ESTAR LOS STICKERSA QUE VAMOS A BUSCAR */}
        <div></div>
    </div>
  )
}

export default Gifs