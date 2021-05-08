import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <div>
      <button className="btn" style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
