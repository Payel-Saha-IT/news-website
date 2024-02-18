import React from 'react'
import { useGlobalContext } from './Context';

const Search = () => {
  
  const {query,searchPost}=useGlobalContext();
  const InputEvent=(event)=>{
      searchPost(event.target.value);
  }

  const PreventSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <h1>News Website by Payel</h1>
      <form onSubmit={PreventSubmit}>
        <div>
          <input type="text" placeholder='search here'
          value={query}
          onChange={
            InputEvent
            }
          ></input>
        </div>
      </form>
    </>
  )
}

export default Search;