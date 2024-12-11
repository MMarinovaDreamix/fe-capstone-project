import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmedBooking = () => {
  return (
    <div className='container confirmed-booking'>
      <FontAwesomeIcon icon={faCircleCheck} size='3x' />
      <h2>Your reservation has been confirmed.</h2>
      <p>We are glad that you chose our restaurant. See you there!</p>
    </div>
  );
};

export default ConfirmedBooking;
