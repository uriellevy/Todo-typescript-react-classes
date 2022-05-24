import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Search from './Search'
import Todos from './Todos'

export interface Item {
  title: string
  id: number
  isCompleted: boolean
}

interface AppState {
  todos: Item[]
  search: string
  isEditing: boolean
  editedTodo: any
}

export default class HomeView extends Component<{}, AppState> {
  state = {
    todos: [
      {title: 'homework', id: 1, isCompleted: false},
      {title: 'go swimming', id: 2, isCompleted: false},
      {title: 'play soccer', id: 3, isCompleted: false},
    ],
    search: '',
    isEditing: false,
    editedTodo: {title:'', id: 0, isCompleted: false},
  }

  addTodoHandler = (todo: Item) => {
    if(this.state.isEditing) {
      this.setState({
        todos: this.state.todos.map((todoItem) => {
          if(todoItem.id === this.state.editedTodo.id) {
            todoItem = todo;
          }else todoItem = todoItem
           return todoItem;
        })
      })
    }else {
      this.setState({
        todos: [...this.state.todos, todo ]
      })
    }

    this.setState({isEditing: false})
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

  editHandler = (id:number) => {
    const selectedTodo = this.state.todos.find((todo) => todo.id === id)
    this.setState({
      isEditing: true,
      editedTodo: selectedTodo
    })
  }



  render() {
    const {todos, search, isEditing, editedTodo} = this.state;
    // console.log(isEditing, editedTodo)
    return (
      <>
      <AddTodo addTodoHandler={this.addTodoHandler} isEditing={isEditing} editedTodo={editedTodo}/>
      <Search  searchHandler={this.searchHandler}/>
      <Todos 
        todos={todos.filter((todo) => todo.title.includes(search))} 
        toggleCompleteHandler={this.toggleCompleteHandler} 
        deleteHandler={this.deleteHandler}
        editHandler={this.editHandler}
         />
      </>
      
    )
  }
}
