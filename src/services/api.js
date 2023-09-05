import axios from "axios";


const API_KEY = '0888d5145581d4e91a57106a6f875732';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
const options = {
    options: {
        api_key: API_KEY,
        language: 'en-US',
    }
};

async function fetchTrendingMovies() {
    const response = await axios.get('/trending/all/day', options);
    return response.data.results;
};

async function fetchMovieSearch(query) {
    const response = await axios.get(
        `/search/movie?query=${query}`,
        options
    );
    return response.data.results;
}

async function fetchMovieDetails(id) {
    const response = await axios.get(`/movie/${id}`, options);
    return response.data;
}

async function fetchAddition(id, param) {
    const response = await axios.get(
        `movie/${id}/${param}`,
        options
    );
    return response.data;
}

export {
    fetchTrendingMovies,
    fetchMovieSearch,
    fetchMovieDetails,
    fetchAddition,
};