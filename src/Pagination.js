import React from 'react'
import { useGlobalContext } from './Context';

const Pagination = () => {
const {page,nbPages,getPrevPage,getNextPage} =useGlobalContext(); 
const PrevPage=()=>{
  getPrevPage();
}

const NextPage=()=>{
  getNextPage();
}
  return (
   <>
    <div className='pagination-btn'>
      <button onClick={PrevPage}>Prev</button>
      <p>{page+1} of {nbPages}</p>
      <button onClick={NextPage}>Next</button>
    </div>
   </>
  )
}

export default Pagination;