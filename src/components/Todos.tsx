import React, { Component } from 'react'
import { Item } from './HomeView'
import TodoItem from './TodoItem'
import './Todos.scss'

interface TodosProps {
  todos: Item[]
  toggleCompleteHandler: (id: number) => void
}

export default class Todos extends Component<TodosProps, {}> {
  render() {
    const {todos, toggleCompleteHandler} = this.props;
    console.log(todos)
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} toggleCompleteHandler={toggleCompleteHandler}/>
        ))}
      </ul>
    )
  }
}
