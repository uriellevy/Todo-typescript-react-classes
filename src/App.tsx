import React, {Component} from 'react';
import './App.scss';
import HomeView from './components/HomeView';

 export interface Item {
  id: number
  title: string
  completed: boolean
}

interface AppState {
  todos: Item[]
  search: string
}

export default class App extends React.Component<{}, AppState> {
  state = {
    todos: [
      {
        id:1,
        title: "homework",
        completed: false
      },
      {
        id:2,
        title: "walk",
        completed: false
      },
      {
        id:3,
        title: "swim",
        completed: false
      }
    ],
    search: ''
  }

  
  render() {
    console.log(this.state.todos)
    const {todos, search} = this.state;
    return (
      <div className='App'>
        <div className='wrapper'>
          <HomeView/>
        </div>
      </div>
    )
  }
}

