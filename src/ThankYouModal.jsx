import ThankYouImg from './assets/illustration-thank-you.svg';

export default function ThankYouModal({userRating}) {
  return (
    <>
      <title>Thank You</title>
      
      <div id="thankYou">
        <img src={ThankYouImg} alt="" />
        <p>You selected {userRating} out of 5</p>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
}