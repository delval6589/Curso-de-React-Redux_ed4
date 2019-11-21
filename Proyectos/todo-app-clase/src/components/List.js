import React, { Component } from "react";
import Task from "./Task";

import "../styles/List.css";


export default class List extends Component {
  state = {
    tasks: [
      {text: 'holaaa'}
    ]
  }

  createTask = (text) => {
    this.setState({
      tasks: this.state.tasks.concat({ text })
    });
  }

  render() {
    const { value = this.props.name, removeList = () => {}, idx } = this.props;

    return (
      <div className="td-list_container">
        <div>{value}</div>
        <div className="td-list_add_task_box">
          <button onClick={() => removeList(idx)} className="td-list_add_cta">
            Remove this task
          </button>
        </div>
        {this.state.tasks.map((task, idx) => <Task key={idx} onBlur={this.createTask} onKeyPress={this.createTask} removeText="X">{task.text}</Task> )}
      </div>
    );
  }
}
