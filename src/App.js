import React, { Component } from 'react';
import ShowTodo from './showTodo.js';
import NewList from './newList.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: [],
      makeNewList: false,
      todoDone: false
    }
  }
  makeTodo = (list) =>{
    const state = this.state;
    state.todo.push(list);
    state.makeNewList = false;
    this.setState(state);
  }
  showNew = () =>{
    const state = this.state;
    state.makeNewList = true;
    this.setState(state);
  }
  todoDone = () => {
    const state = this.state;
    state.todoDone = true;
    this.setState(state)
  }
  render() {
    return (
      <div>
        <h1>To-Do</h1>
        <ShowTodo todo={this.state.todo} todoDone={this.todoDone} done={this.state.todoDone}/>
        {!this.state.makeNewList ? <button onClick={this.showNew}>NewList</button> : <NewList makeTodo={this.makeTodo}/>}
      </div>
    );
  }
}

export default App;
