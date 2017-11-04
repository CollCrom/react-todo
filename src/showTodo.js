import React, { Component } from 'react';
import './showTodo.css'

class ShowTodo extends Component {
	render(){
    const crossOut = this.props.done ? 'crossOut' : '';
    const doneBtn = this.props.done ? 'doneBtn' : '';
		const todoList = this.props.todo.map((item, i)=> {
			return (<div key={i}>
                <h3>Title:</h3>
                <p className={crossOut}>{item.title}</p>
                <h4>Notes:</h4>
                <p>{item.note}</p>
                <button onClick={this.props.todoDone} className={doneBtn}>Done</button>
                <button>Edit</button>
                <button onClick={this.props.todoDelete} value={item.title}>Delete</button>
              </div>)
    });
    return (<ul>
              {todoList}
            </ul>)
	}
}

export default ShowTodo;