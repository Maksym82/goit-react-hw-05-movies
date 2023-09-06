import { BunnerFilms } from 'components/Layout/Layout.styled';
import { List, MovieLink } from 'components/MoviesList/MovieList.styled';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
const IMG_URL = `https://image.tmdb.org/t/p/w500`;


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetchTrendingMovies();
        console.log(response);
        setMovies(response);
      } catch (error) {
        console.error('Not found');
      }
    };
    fetchRequest();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <List>
        {movies.map(
          ({ id, title, poster_path }) =>
            title && (
              <li key={id}>
                 
                <MovieLink key={id} to={`/movies/${id}`}>
                <BunnerFilms src={`${IMG_URL}${poster_path}`} alt={title} />
                </MovieLink>
              </li>
            )
        )}
      </List>
    </>
  );
}

export default Home;
