import RatingModal from './RatingModal';
import ThankYouModal from './ThankYouModal';
import { useState } from 'react';

export default function App() {
  const [hasRated, setHasRated] = useState(false);
  const [userRating, setUserRating] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setHasRated(true);
  }

  return (
    <>
      { hasRated ? <ThankYouModal userRating={userRating}/> : <RatingModal userRating={userRating} setUserRating={setUserRating} handleSubmit={handleSubmit}/>}
    </>
  );
}