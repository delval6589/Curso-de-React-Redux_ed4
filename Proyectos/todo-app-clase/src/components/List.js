import React, { Component } from "react";
import { Task } from "./Task";

import "../styles/List.css";

export default class List extends Component {
  constructor(props) {
    super();

    this.state = {
      title: props.title,
      editing: false,
      tasks: [],
      newTodo: ""
    };
  }

  startEditing = () => {
    this.setState({ editing: true });
  };

  endEditing = () => {
    this.setState({ editing: false });
  };

  handleChangeTitle = ev => {
    this.setState({ title: ev.target.value });
  };

  handleChangeTitleKeyDown = ev => {
    const isEnter = event => event.keyCode === 13;
    if (!isEnter(ev)) {
      return;
    }

    ev.preventDefault();
    this.endEditing();
  };

  handleNewTask = ev => {
    this.setState({ newTodo: ev.target.value });
  };

  handleNewTaskKeyDown = ev => {
    const isEnter = event => event.keyCode === 13;
    if (!isEnter(ev)) {
      return;
    }

    ev.preventDefault();

    const newTodoText = this.state.newTodo.trim();
    if (!newTodoText) {
      return;
    }

    this.createTask(newTodoText);
    this.setState({ newTodo: "" });
  };

  createTask = text => {
    const id = Math.floor(Math.random() * Date.now());
    this.setState({
      tasks: this.state.tasks.concat({ id, text })
    });
  };

  removeTask = id => {
    const tasks = [...this.state.tasks];
    const taskIdx = tasks.findIndex(task => task.id === id);
    tasks.splice(taskIdx, 1);
    this.setState({ tasks });
  };

  render() {
    const { name, removeText = "", onRemoveList = () => {}, idx } = this.props;

    return (
      <div className="td-list_container">
        {this.state.editing ? (
          <input
            onChange={this.handleChangeTitle}
            onBlur={this.endEditing}
            onKeyDown={this.handleChangeTitleKeyDown}
            value={this.state.title}
            autoFocus="true"
          />
        ) : (
          <div onDoubleClick={this.startEditing}>{this.state.title}</div>
        )}
        <div className="td-list_add_task_box">
          <button onClick={() => onRemoveList(idx)} className="remove-button">
            {removeText}
          </button>
        </div>
        <input
          className="create-task-input"
          placeholder="Enter your new task"
          value={this.state.newTodo}
          onKeyDown={this.handleNewTaskKeyDown}
          onChange={this.handleNewTask}
        ></input>
        <ul>
          {this.state.tasks.map(task => (
            <Task key={task.id} onRemove={() => this.removeTask(task.id)}>
              {task.text}
            </Task>
          ))}
        </ul>
      </div>
    );
  }
}
