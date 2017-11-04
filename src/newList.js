import React, {Component} from 'react';

class NewList extends Component {
	constructor(){
		super();
		this.state = {
			todo: {
				title: '',
				note: ''
			}
		}
	}
	handleChange = (e) => {
		const state = this.state;
		const title = e.currentTarget.name;
		state.todo[title] = e.currentTarget.value;
		this.setState(state);
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.makeTodo(this.state.todo)
		const state = this.state;
		state.todo.title = '';
		state.todo.note = '';
		this.setState(state);
	}
	render(){
		return(
			<form>
				<h2>NewList</h2>
				<h3>Title:</h3>
				<input name='title' type='text' onChange={this.handleChange} placeholder='List Title' value={this.state.todo.title}/>
				<h4>Notes</h4>
				<textarea name='note' type='text' onChange={this.handleChange} placeholder='List Notes' value={this.state.todo.note}/>
				<button onClick={this.handleSubmit}>Add New List</button>
			</form>
		)
	}
}

export default NewList;