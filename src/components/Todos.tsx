import React, { Component } from 'react'
import { Item } from './HomeView'
import TodoItem from './TodoItem'
import './Todos.scss'

interface TodosProps {
  todos: Item[]
  toggleCompleteHandler: (id: number) => void
  deleteHandler: (id: number) => void
  editHandler: (id: number, text:string) => void
}

export default class Todos extends Component<TodosProps, {}> {
  render() {
    const {todos, toggleCompleteHandler, deleteHandler, editHandler} = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem 
          todo={todo} 
          key={todo.id} 
          toggleCompleteHandler={toggleCompleteHandler} 
          deleteHandler={deleteHandler}
          editHandler={editHandler}/>
        ))}
      </ul>
    )
  }
}
