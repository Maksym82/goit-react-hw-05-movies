import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, MovieLink } from './MovieList.styled';
import { BunnerFilms } from 'components/Layout/Layout.styled';
import question from '../MovieDescription/question.png';
const IMG_URL = `https://image.tmdb.org/t/p/w500`;


function MoviesList(movies) {
  const location = useLocation();
  console.log(movies)
  return (
    <List>
      {movies.movies.map(
        ({ id, title, poster_path }) =>
          title && (
            <li key={id}>
              
              <MovieLink
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <BunnerFilms src={poster_path ? `${IMG_URL}${poster_path}` : question } alt={title} />
              </MovieLink>
            </li>
          )
      )}
    </List>
  );
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
        })
    ).isRequired,
};

export default MoviesList;
