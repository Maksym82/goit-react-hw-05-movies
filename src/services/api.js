import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODg4ZDUxNDU1ODFkNGU5MWE1NzEwNmE2Zjg3NTczMiIsInN1YiI6IjY0ZjRiZGRjOWU0NTg2MDBhZDdmMzZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MR7j7j0anR-0y1CkqSWu6_5-5CNC_cl_ecbn99T0_48',
    },
};

async function fetchTrendingMovies() {
    const response = await axios.get('/trending/all/day?language=en-US', options);
    return response.data.results;
};

async function fetchMovieSearch(query) {
    const response = await axios.get(
        `/search/movie?query=${query}&language=en-US`,
        options
    );
    return response.data.results;
}

async function fetchMovieDetails(id) {
    const response = await axios.get(`/movie/${id}?language=en-US`, options);
    return response.data;
}

async function fetchAddition(id, param) {
    const response = await axios.get(
        `movie/${id}/${param}?language=en-US`,
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