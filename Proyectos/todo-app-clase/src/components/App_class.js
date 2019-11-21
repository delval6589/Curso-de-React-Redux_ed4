import React, { Component, Fragment } from "react";
import Button from "./Button";
import "../styles/App.css";

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <Fragment>
        <h1 className="tdl-main_title-link">{this.state.value}</h1>
        <Button onClick={this.handleClick}>Click me!!</Button>
      </Fragment>
    );
  }
};