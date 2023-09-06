import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, MovieLink } from './MovieList.styled';
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
              <img src={`${IMG_URL}${poster_path}`} alt={title} />
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
