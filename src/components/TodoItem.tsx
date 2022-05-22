import React, { Component } from 'react'
import { Item } from './HomeView'
import './Todos.scss'
interface TodoItemProps {
  todo: Item
  toggleCompleteHandler: (id: number) => void
  deleteHandler: (id: number) => void
  editHandler: (id:number, text: string) => void
}

export default class TodoItem extends Component<TodoItemProps, {}> {
  
  
  render() {
    const {todo, toggleCompleteHandler, deleteHandler, editHandler} = this.props;
    return (
      <li className='item-wrapper'>
        <div className='item-left'>
        <input type="checkbox" className='checkbox' onChange={() => toggleCompleteHandler(todo.id)}/>
        <div className={todo.isCompleted ? 'item-title completed' : 'item-title'}>
        {todo.title}
        </div>
        </div>

        <div className='item-right'>
        <button className='btn-edit' onClick={() => editHandler(todo.id, todo.title)}>Edit</button>
        <button className='btn-delete' onClick={() => deleteHandler(todo.id)}>Delete</button>
        </div>
      </li>
    )
  }
}
