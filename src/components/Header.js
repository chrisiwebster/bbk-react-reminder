import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={"Blue"} text={"Click me"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task reminder",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
