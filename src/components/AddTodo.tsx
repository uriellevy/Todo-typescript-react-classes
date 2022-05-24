import React, { Component } from 'react'
import { Item } from './HomeView'
import './AddTodo.scss'


interface AddTodoProps {
  addTodoHandler: (item: Item) => void
  isEditing: boolean
  editedTodo: Item | null
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
      this.props.addTodoHandler(
        {title: this.state.text,
         id: Math.round(Math.random() * 1000),
         isCompleted: false, 
         })
    }
    this.setState({text: ''})
  }

  addInput: any
  componentDidMount() {
    this.addInput.focus();
  }


  render() {
    const {text} = this.state;
    const {isEditing, editedTodo} = this.props;
    // console.log(isEditing)
    return (
      <>
      {isEditing ?
      <form onSubmit={this.submitAddHandler}>
      <input 
      className='add-input'
      type="text" 
      placeholder='Edit Task...' 
      value={text} 
      onChange={this.onChangeHandler} 
      ref={(inputEl) => (this.addInput = inputEl)}/> 
      <input className='submit-input' type="submit" value='Edit' /> 
     </form>
      :
      
      <form onSubmit={this.submitAddHandler}>
       <input 
       className='add-input'
       type="text" 
       placeholder='Add Task...' 
       value={text} 
       onChange={this.onChangeHandler} 
       ref={(inputEl) => (this.addInput = inputEl)}/> 
       <input className='submit-input' type="submit" value='Submit' /> 
      </form>
      }
      </>
    )
  }
}
