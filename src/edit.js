import React, {Component} from 'react';

class EditTodo extends Component {
	constructor(props){
		super(props);
		this.state ={
			todo : {
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
    this.props.todoEdit(this.state.todo)
    const state = this.state;
    this.setState(state);
  }
	render(){
		return (
      <form>
        <h3>Title:</h3>
        <input name='title' type='text' onChange={this.handleChange} placeholder={this.props.editObj.title} value={this.state.todo.title}/>
        <h4>Notes</h4>
        <textarea name='note' type='text' onChange={this.handleChange} placeholder={this.props.editObj.notes} value={this.state.todo.note}/>
        <button onClick={this.handleSubmit}>Edit List</button>
      </form>
    )
	}
}

export default EditTodo;