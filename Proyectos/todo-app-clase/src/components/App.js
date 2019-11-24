import React, { Component } from "react";
import List from "./List";

import "../styles/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        { id: 0, title: "Monday" },
        { id: 1, title: "Tuesday" },
        { id: 2, title: "Wednesday" },
        { id: 3, title: "Thursday" },
        { id: 4, title: "Friday" },
        { id: 5, title: "Saturday" },
        { id: 6, title: "Sunday" }
      ]
    };

    this.createList = this.createList.bind(this);
    this.handleRemoveList = this.handleRemoveList.bind(this);
  }

  render() {
    return (
      <div>
        <div className={"tdl-main_title-link"}>
          <h1 className="tdl-main_title">GO FOR IT</h1>
        </div>
        <button onClick={this.createList} className="tdl-add_list_button">
          Create new list
        </button>
        <section className="tdl-main-section">
          {this.state.lists.map((list, idx) => (
            <List
              key={list.id}
              onRemoveList={ev => this.handleRemoveList(list.id, ev)}
              title={list.title}
              removeText="X"
            />
          ))}
        </section>
      </div>
    );
  }

  handleRemoveList(id) {
    let newArr = [...this.state.lists];
    const listIdx = newArr.findIndex(list => list.id === id);
    newArr.splice(listIdx, 1);

    this.setState({
      lists: newArr
    });
  }

  createList() {
    const id = Math.floor(Math.random() * Date.now());
    const lists = [...this.state.lists, { id, title: "New List" }];

    this.setState({
      lists: lists
    });
  }
}
