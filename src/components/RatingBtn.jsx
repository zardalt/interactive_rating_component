import './RatingBtn.css';

export default function RatingBtn({value, userRating, setUserRating}) {
  return (
    <button
      type="button"
      aria-checked={value === userRating}
      onClick={() => setUserRating(value)}
    >
      {value}
    </button>
  );
}