import React, {useContext} from 'react'
import { handleClickCtx } from './handleClickCtx'



const Button = ({ value, company}) => {

  const handleClick = useContext(handleClickCtx)

  return (
    
   <button  onClick={handleClick}  value={value}>{company} </button>
    
  )
}

export default Button