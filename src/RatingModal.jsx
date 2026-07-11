import StarIcon from "./assets/icon-star.svg";
import RatingBtn from "./components/RatingBtn";
import { useState } from "react";
import './RatingModal.css';

export default function RatingModal({userRating, setUserRating, handleSubmit}) {

  return (
    <div id="ratingModal">
      <img src={StarIcon} alt="" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form id="ratingBtns" onSubmit={handleSubmit}>
        <div className="btns">
          <RatingBtn
            value={1}
            setUserRating={setUserRating}
            userRating={userRating}
          />
          <RatingBtn
            value={2}
            setUserRating={setUserRating}
            userRating={userRating}
          />
          <RatingBtn
            value={3}
            setUserRating={setUserRating}
            userRating={userRating}
          />
          <RatingBtn
            value={4}
            setUserRating={setUserRating}
            userRating={userRating}
          />
          <RatingBtn
            value={5}
            setUserRating={setUserRating}
            userRating={userRating}
          />
        </div>

        <button type="submit" disabled={userRating === null}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}