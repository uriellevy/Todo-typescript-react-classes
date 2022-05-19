import React, { Component } from 'react'
import { Item } from './HomeView'
import './AddTodo.scss'


interface AddTodoProps {
  addTodoHandler: (item: Item) => void
}

interface AddTodoState {
  text: string
}


export default class AddTodo extends Component<AddTodoProps, AddTodoState> {
  state = {
    text: ''
  }

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value})
  }

  submitAddHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.addTodoHandler({title: this.state.text, id: Math.round(Math.random() * 1000), isCompleted: false, isEditing: false})
    }
    this.setState({text: ''})
  }
  

  render() {
    const {text} = this.state;
    return (
      <form onSubmit={this.submitAddHandler}>
       <input className='add-input' type="text" placeholder='Add Task...' value={text} onChange={this.onChangeHandler}/> 
       <input className='submit-input' type="submit" /> 
      </form>
    )
  }
}
