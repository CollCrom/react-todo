import React, { Component } from 'react';
import ShowTodo from './showTodo.js';
import NewList from './newList.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: [],
      makeNewList: false
    }
  }
  makeTodo = (list) =>{
    console.log(list ,'list')
    const state = this.state;
    state.todo.push(list);
    state.makeNewList = false;
    console.log(state.todo, 'state')
    this.setState(state);
    console.log(this.state.todo, 'this.state')
  }
  showNew = () =>{
    const state = this.state;
    state.makeNewList = true;
    this.setState(state);
  }
  render() {
    return (
      <div>
        <h1>To-Do</h1>
        <ShowTodo todo={this.state.todo}/>
        {!this.state.makeNewList ? <button onClick={this.showNew}>NewList</button> : <NewList makeTodo={this.makeTodo}/>}
      </div>
    );
  }
}

export default App;
