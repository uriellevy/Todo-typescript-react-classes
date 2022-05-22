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
  editingTodo: string
}

export default class HomeView extends Component<{}, AppState> {
  state = {
    todos: [
      {title: 'homework', id: 1, isCompleted: false, isEditing: false},
      {title: 'go swimming', id: 2, isCompleted: false, isEditing: false},
      {title: 'play soccer', id: 3, isCompleted: false, isEditing: false}
    ],
    search: '',
    editingTodo: '',
  }

  addTodoHandler = (todo: Item) => {
      this.setState({
        todos: [...this.state.todos, todo ]
      })
  }

  toggleCompleteHandler = (id: number) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
         todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    })
  }

  deleteHandler = (id: number) => {
    this.setState({
      todos: this.state.todos.filter((todo) => id !== todo.id)
    })
  }

  searchHandler = (search: string) => {
    this.setState({search: search})
  }

  editHandler = (id:number, text: string) => {
    console.log(this.state.todos.find((todo) => id === todo.id));
    const selectedTodo = this.state.todos.find((todo) => id === todo.id);
    this.setState({editingTodo: text});
  }



  render() {
    const {todos, search} = this.state;
    return (
      <>
      <AddTodo addTodoHandler={this.addTodoHandler}/>
      <Search  searchHandler={this.searchHandler}/>
      <Todos 
        todos={todos.filter((todo) => todo.title.includes(search))} 
        toggleCompleteHandler={this.toggleCompleteHandler} 
        deleteHandler={this.deleteHandler}
        editHandler={this.editHandler} />
      </>
      
    )
  }
}
