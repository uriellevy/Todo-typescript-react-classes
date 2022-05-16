import React, { Component } from 'react'
import { Item } from './HomeView'


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
    this.props.addTodoHandler({title: this.state.text, id: Math.round(Math.random() * 1000), isCompleted: false, isEditing: false})
  }
  

  render() {
    const {text} = this.state;
    return (
      <form onSubmit={this.submitAddHandler}>
       <input type="text" placeholder='Add Task...' onChange={this.onChangeHandler}/> 
       <input type="submit" /> 
      </form>
    )
  }
}
