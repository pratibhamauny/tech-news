import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const {page,nbPages,prevHandler,nextHandler}=useGlobalContext();
  return (
    <div>
      <button onClick={()=>prevHandler()}>PREV</button>
      <span> {page+1} of {nbPages} </span>
      <button onClick={()=>nextHandler()}>NEXT</button>
    </div>
  )
}

export default Pagination
