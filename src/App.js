import React, { Component } from 'react';
import ShowTodo from './showTodo.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: 
      [
        {
          title: 'Clean House',
          note: 'blah blah'
        },
        {
          title: 'Go Shopping'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>To-Do</h1>
        <ShowTodo todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
