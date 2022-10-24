import axios from "axios"
import { API_KEY, API_URL_STICKERS } from "./settings"



// SERVICIO PARA OBTENER STICKERS PARA CUANDO BUSQUEMOS
export const getStickers = async ({ limit = 20, query, page = 0 }) => {

    const url = `${API_URL_STICKERS}/search?api_key=${API_KEY}q=${query}limit=${limit}&offset=${page * limit}&rating=g&lang=en`

    const { data } = await axios.get(url)

    return data

}