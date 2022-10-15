import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import "./Home.scss"

// PÁGINA DEL HOME DONDE APARACERAN TODOS LOS GIFS, Y LAS TENDENCIAS Y TAMBIEN DONDE PODREMOS BUSCAR GIFS
const Home = () => {

    // ESTADO PARA EL INPUT DE LA BUSQUEDA DE DETERMINADOS GIFS
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
        {/* TITULO */}
        <Title title="Giphy App" />

        {/* FORMULARIO PARA BUSCAR LOS GIFS ESPECIFICOS */}
        <form onSubmit={handleSearchSubmit} >
            <input type="text" onChange={handleChange} value={search} placeholder="Busca gifs" />
            <button>Buscar</button>
        </form>

        {/* DONDE VAN A ESTAR LOS GIFS Y LAS TENDENCIAS */}
        <div>
            {/* ASIDE DONDE VAN A ESTAR LAS TENDENCIAS */}
            <aside></aside>

            {/* TODOS LOS GIFS */}
            <div></div>

            
        </div>
        
    </div>
  )
}

export default Home