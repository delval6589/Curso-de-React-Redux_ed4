import React, { Component } from 'react';
import { Header } from './Header';
import List from './List';
import { connect } from "react-redux";
import { createNewList, changeListName } from "../state/lists/list-action-creators";

import '../styles/App.css';

class App extends Component {
  render() {
    return(
      <>
        <Header>Go For It!</Header>
        <button onClick={() => this.props.createNewList("New List")} className="tdl-add_list_button">Create new list</button>
        <section className="tdl-main-section">
          {this.props.lists.map((list, idx, lists) => (
            <List
              key={list.id}
              newListName={ev => this.props.changeListName(list.id, ev.target.value)}
              submitName={this.submitName}
              changeListName={() => this.props.changeListName(list.id, "")}
            >
              {list.name}
            </List>
          ))}
        </section>
      </>
  )};

  submitName = (event) => {
    if(event.keyCode === 13){ event.target.blur() }
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewList: name => dispatch(createNewList(name)),
    changeListName: (id, newName) => dispatch(changeListName(id, newName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
