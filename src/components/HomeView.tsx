import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Search from './Search'
import Todos from './Todos'

export interface Item {
  title: string
  id: number
  isCompleted: boolean
  isEditing: boolean
}

interface AppState {
  todos: Item[]
  search: string
}

export default class HomeView extends Component<{}, AppState> {
  state = {
    todos: [
      {title: 'homework', id: 1, isCompleted: false, isEditing: false},
      {title: 'go swimming', id: 2, isCompleted: false, isEditing: false},
      {title: 'play soccer', id: 3, isCompleted: false, isEditing: false}
    ],
    search: '',
  }

  addTodoHandler = (todo: Item) => {
      this.setState({
        todos: [...this.state.todos, todo ]
      })
  }

  render() {
    const {todos, search} = this.state;
    console.log(this.state.todos)
    return (
      <>
      <AddTodo addTodoHandler={this.addTodoHandler}/>
      <Search/>
      <Todos/>
      </>
      
    )
  }
}
