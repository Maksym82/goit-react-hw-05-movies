import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from '../services/api';

import { Addition, AdditionLink, AdditionList, Container, Description,  Text, Title } from "components/MovieDescription/MovieDescription.styled";
import question from '../components/MovieDescription/question.png';

function MovieDetails() {
    const [details, setDetails] = useState({});
    const { movieId } = useParams(); 

    useEffect(() => {
        if (!movieId) return;
        
        const fetchRequestDetails = async () => {
            try {
                const res = await fetchMovieDetails(movieId)
              console.log(res);
              setDetails(res);
            } catch (error) {
              console.error('Not found');
            }
          };
          fetchRequestDetails();
    }, [movieId]);
    const { title, release_date, vote_average, overview, genres, poster_path } =
    details;
    const date = new Date(release_date).getFullYear();
    
    
    return (
        <>
          
            <>
              <Container>
                <img
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w300' + poster_path
                      : question
                  }
                  width={250}
                  height={400}
                  alt="poster"
                />
                <Description>
                  <Title>
                    {title} ({date})
                  </Title>
                  <p>User score: {Math.round(vote_average * 10)}%</p>
                  <h3>Overview</h3>
                  <Text>{overview}</Text>
                  <h3>Genres</h3>
                  {genres
                    ? genres.map(genre => genre.name + ' ')
                    : 'Not information'}
                </Description>
              </Container>
              <Addition>
                <h3>Additional information</h3>
                <AdditionList>
                  <li>
                    <AdditionLink to="cast">Cast</AdditionLink>
                  </li>
                  <li>
                    <AdditionLink to="review">Review</AdditionLink>
                  </li>
                </AdditionList>
              </Addition>
            </>
          
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      );
    }


export default MovieDetails;