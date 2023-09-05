import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchRequest = async() => {
            try {
                const response = await fetchTrendingMovies();
                console.log(response)
                setMovies(response.results)
            } catch (error) {
                console.error("Not found")
            }
        }
        fetchRequest();
        
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <MoviesList movies={movies} />
        </>
    );
}


export default Home;