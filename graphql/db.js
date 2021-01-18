import axios from 'axios'

const API_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${API_URL}list_movies.json`
const MOVIE_DETAILS_URL = `${API_URL}movie_details.json`

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: {movies}
        }
    } = await axios(LIST_MOVIES_URL,{
        params: {
            limit,
            minimum_rating: rating,
        }
    });
    return movies;
};

export const getMovie = async ( id ) => {
    const {
        data: {
            data: {movie}
        }
    } = await axios(MOVIE_DETAILS_URL,{
        params: {
            movie_id: id
        }
    });
    return movie
};