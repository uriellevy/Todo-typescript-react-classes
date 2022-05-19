import React, { Component } from 'react'
import { Item } from './HomeView'
import './Todos.scss'
interface TodoItemProps {
  todo: Item
}

export default class TodoItem extends Component<TodoItemProps, {}> {
  render() {
    const {todo} = this.props;
    return (
      <li className='item-wrapper'>
        <div className='item-left'>
        <input type="checkbox" className='checkbox'/>
        <div className='item-title'>
        {todo.title}
        </div>
        </div>

        <div className='item-right'>
        <button className='btn-edit'>Edit</button>
        <button className='btn-delete'>Delete</button>
        </div>
      </li>
    )
  }
}
