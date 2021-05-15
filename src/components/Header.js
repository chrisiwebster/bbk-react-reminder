import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={"Blue"} text={"Click me"} onClick={onClick} />
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
