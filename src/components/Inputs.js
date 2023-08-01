import React, {useContext} from 'react'
import { handleChangeCtx } from './handleChangeCtx'


const Inputs = ({value, title, name, color, id}) => {

  const handleChange = useContext(handleChangeCtx)
  return (
    <div className='radios'>
        <input onChange={handleChange} type='radio' value={value}  name={name} id={id}></input>
        <label htmlFor={id}>{title}</label>
    </div>
  )
}

export default Inputs






