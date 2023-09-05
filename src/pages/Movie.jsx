import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
// import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { fetchMovieSearch } from '../services/api';
import { List, MovieLink } from "components/MoviesList/MovieList.styled";


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
    console.log(movies)
    return (
        <>
            <Search location={location} onSubmit={handleSubmit} />
            <List>
      {movies.map(
        ({ id, title }) =>
          (
            <li key={id}>
              <MovieLink
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </MovieLink>
            </li>
          )
      )}
    </List>
        </>
    );
}

export default Movie;
