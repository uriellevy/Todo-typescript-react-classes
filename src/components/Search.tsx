import React, { Component } from 'react'
import './Search.scss'

export default class Search extends Component {
  render() {
    return (
      <>
        <input type="text" placeholder='Search...' className='search-input' />      
      </>
    )
  }
}
