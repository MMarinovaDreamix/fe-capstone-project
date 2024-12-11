import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const UnderConstruction = () => {
  return (
    <div className='container under-construction'>
      <FontAwesomeIcon icon={faPersonDigging} size='3x' />
      <h2>Oops, this page is not ready yet, please be patient!</h2>
    </div>
  );
};

export default UnderConstruction;
