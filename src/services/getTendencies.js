import axios from "axios";
import { API_KEY, API_URL_STICKERS } from "./settings";


// FUNCION PARA CUANDO OBTENGAMOS LAS TENDENCIAS DE GIFS
export const getTendencies = async () => {

    const url = `${API_URL_STICKERS}/trending?api_key=${API_KEY}limit=25&rating=g`

    const { data } = await axios.get(url)

    return data
}