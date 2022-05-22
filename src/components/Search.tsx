import React, { Component } from 'react'
import './Search.scss'

interface SearchProps {
  searchHandler: (search: string) => void
}

  

export default class Search extends Component<SearchProps, {}> {
  changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.searchHandler(e.target.value)
  }


  
  render() {
    return (
      <>
        <input type="text" placeholder='Search...' className='search-input' onChange={this.changeSearchHandler}  />      
      </>
    )
  }
}
