import React, { useState, Fragment } from "react";
import Header from "./Header";
import Button from "./Button";
import "../styles/App.css";

export default () => {
  const [value, setValue] = useState(0);
  const handleClick = () => setValue(value + 1);

  return (
    <Fragment>
      <Header className="tdl-main_title-link">{value}</Header>
      <Button onClick={handleClick}>Click me!!</Button>
    </Fragment>
  );  
};