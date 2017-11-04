import React, { Component } from 'react';

class ShowTodo extends Component {
	render(){
		const todoList = this.props.todo.map((item, i)=> {
			return (<div key={i}>
                <h3>ToDo: {item.title}</h3>
                <h4>Notes:</h4>
                <p>{item.note}</p>
              </div>)
    });
    return (<ul>
              {todoList}
            </ul>)
	}
}

export default ShowTodo;