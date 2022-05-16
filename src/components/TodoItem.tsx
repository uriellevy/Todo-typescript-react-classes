import React, { Component } from 'react'
import { Item } from './HomeView'

interface TodoItemProps {
  todo: Item
}

export default class TodoItem extends Component<TodoItemProps, {}> {
  render() {
    const {todo} = this.props;
    return (
      <li>{todo.title}</li>
    )
  }
}
