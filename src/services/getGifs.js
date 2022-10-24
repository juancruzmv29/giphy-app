import axios from "axios";
import { API_KEY, API_URL_GIFS } from "./settings";


// SERVICIO PARA OBTENER GIFS
export const getGifs = async ({ limit = 25, query, page = 0 }) => {
    const url = `${API_URL_GIFS}/search?api_key=${API_KEY}q=${query}limit=${limit}&offset=${page * limit}&rating=g&lang=en`

    const { data } =  await axios.get(url)

    return data
}

