import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const BackButton = ({
  label = "Go Back",
  className = "",
  fallbackRoute = "/",
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackRoute);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

BackButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  fallbackRoute: PropTypes.string,
};

export default BackButton;
