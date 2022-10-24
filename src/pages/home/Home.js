import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title/Title'
import "./Home.scss"

// PÁGINA DEL HOME DONDE APARACERAN TODOS LOS GIFS, Y LAS TENDENCIAS Y TAMBIEN DONDE PODREMOS BUSCAR GIFS
const Home = () => {

    // ESTADO PARA EL INPUT DE LA BUSQUEDA DE DETERMINADOS GIFS
    const [tendencies, setTendencies] = useState([])

  return (
    <div>
        {/* TITULO */}
        <Title title="Giphy App" />

        {/* BOTONES PARA IR A BUSCAR GIFS O STICKERS */}
        <div className='buttons'>
            <Link to="/gifs" className='button_1' ><button>Buscar Gifs</button></Link>
            <Link to="/stickers" className='button_1' ><button>Buscar Gifs</button></Link>
            
        </div>

        {/* DONDE VAN A ESTAR LOS GIFS Y LAS TENDENCIAS */}
        <div>

            <h3>Tendencies</h3>
            {/* DONDE VAN A ESTAR LAS TENDENCIAS */}
            <div></div>

            
        </div>
        
    </div>
  )
}

export default Home