import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { fetchMovieSearch } from '../services/api';



function Movie() {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const handleSubmit = value => {
        setSearchParams({ query: value });
    };
    
    useEffect(() => {
        if (!query) return;
        setMovies([]);
        const fetchRequestMovieSearch = async() => {
            try {
                const res = await fetchMovieSearch(query);
                setMovies(prevState => [...prevState, ...res]);
                
            } catch (error) {
                console.error('Not found')
            }
              }
              fetchRequestMovieSearch();
    }, [query]);
 
    return (
        <>
            <Search location={location} onSubmit={handleSubmit} />
            <MoviesList movies={movies} />
        </>
    );
}

export default Movie;
