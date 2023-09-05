import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAddition } from '../../services/api';

function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchAddition(movieId, 'reviews')
      .then(res => {
        const reviewArr = res.results;
        setReviews([...reviewArr]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
        <ReviewList>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <Name>Author: {author}</Name>
              <Comment>{content}</Comment>
            </ReviewItem>
          ))
        ) : (
          <div>We do not have  reviews for this movie</div>
        )}
        </ReviewList>
    </div>
  );
}

export default Review;
