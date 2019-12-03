// En este punto podemos probar a usar App como un Componente de Clase
// Tenemos que importar React y extender Component que lo importamos como naming
import React, { Component } from 'react';

// La estructura de archivos nos permite agrupar todos los componentes juntos bajo la misma carpeta
// Las llaves indican que es un Naming Import, no Default
import { Header } from './Header';
// Un import sin llaves import el export por defecto
// Se puede nombrar el import List o como se quiera, porque JS si no ve llaves, de cualquier manera importa el default
import List from './List';

import '../styles/App.css';

// 'export default' puede ir junto a la declaración de nuestro class
// Hay que extender Component, que nos permite hacer uso de métodos como render que nos permite pintar componentes
export default class App extends Component {
  // No hay class component sin `render` method
  render() {
    return(
      <>
      {/* ^^ Esta sintaxis es equivalente a <React.Fragment></React.Fragment> */}
      {/* Cada componente devuelve 1 bloque */}
        <Header>GO FOR IT!</Header>
        {/* Se podría exportar este button a un compoente externo? Por qué? Es reutilizable? */}
        <button onClick={this.createList.bind(this)} className="tdl-add_list_button">Create new list</button>
        {/* Recuerdas por qué se linka este this.createList? porque le pasamos el this */}
        <section className="tdl-main-section">
          {/* Renderizando listas gracias al método map */}
          {this.state.lists.map((list, idx, lists) => (
            <List
              key={idx}
              newListName={() => this.newListName(idx)}
              submitName={this.submitName}
              changeListName={() => this.changeListName(idx)}
            >
              {/* Todos los elementos que devuelve el map TIENEN que tener un key prop que usa React por motivos de performance */}
              {/* Esta instancia de List tiene como props distintos métodos, los cuales linkan this de distintas formas */}
              {list}
            </List>
          ))}
        </section>
      </>
  )};

  constructor(props) {
    super(props)
    // Este constructor es un método de JS. que se llama cuando se monta el componente

    // Inicializacion del 'estado' interno del componente
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
    }

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
      lists: newArr
    });
  }
}
