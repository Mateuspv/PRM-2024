import { API } from "../@libs/axios";
import { IMovie } from "../@libs/types";

const _ENDPOINT = '/movies';


const getMovies = async (): Promise <IMovie[]> => {
    const {data} = await API.get(_ENDPOINT)
    return data;
}

const getMoviesByid = async (id: string): Promise<IMovie> => {
    const {data} = await API.get(`${_ENDPOINT}/${id}`)
    return data;
}

export const MoviesService = {
    getMovies,
    getMoviesByid
}