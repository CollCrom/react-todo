import React, { Component } from 'react';
import ShowTodo from './showTodo.js';
import NewList from './newList.js'
import Edit from './edit.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: [],
      makeNewList: false,
      todoDone: false,
      showEdit: false,
      editObj: {},
      editIndex: null
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
  todoDelete = (e) => {
    const state = this.state;
    const objTitle = e.target.value;
    const index = state.todo.findIndex((find)=>{
      return find.title === objTitle;
    })
    state.todo.splice(index,1);
    this.setState(state)
  }
  showEdit = (e) => {
    const state = this.state;
    const objTitle = e.target.value;
     state.editIndex = state.todo.findIndex((find)=>{
      return find.title === objTitle;
    })
    state.editObj = state.todo[state.editIndex];
    state.showEdit = !state.showEdit;
    this.setState(state)
  }
  todoEdit = (list) =>{
    const state = this.state;
    state.todo[state.editIndex] = list;
    state.showEdit = !state.showEdit;
    this.setState(state)
  }
  render() {
    return (
      <div>
        <h1>To-Do</h1>
        <ShowTodo todo={this.state.todo} todoDone={this.todoDone} done={this.state.todoDone} todoDelete={this.todoDelete} showEdit={this.showEdit}/>
        {!this.state.makeNewList ? <button onClick={this.showNew}>NewList</button> : <NewList makeTodo={this.makeTodo}/>}
        {this.state.showEdit ? <Edit editObj={this.state.editObj} todoEdit={this.todoEdit}/> : null}
      </div>
    );
  }
}

export default App;
