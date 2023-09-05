import axios from "axios";


const API_KEY = '0888d5145581d4e91a57106a6f875732';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
const params = {
    params: {
        api_key: API_KEY,
        language: 'en-US',
    }
};

async function fetchTrendingMovies() {
    const response = await axios.get(`${BASE_URL}`, params);
    return response.data.results;
};

async function fetchMovieSearch(query) {
    const response = await axios.get(
        `${BASE_URL_SEARCH}`?query=`${query}`,
        params
    );
    return response.data.results;
}

async function fetchMovieDetails(id) {
    const response = await axios.get(`/movie/${id}`, params);
    return response.data;
}

async function fetchAddition(id, param) {
    const response = await axios.get(
        `movie/${id}/${param}`,
        params
    );
    return response.data;
}

export {
    fetchTrendingMovies,
    fetchMovieSearch,
    fetchMovieDetails,
    fetchAddition,
};