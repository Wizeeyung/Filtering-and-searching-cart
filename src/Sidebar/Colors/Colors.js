import React, {useContext} from 'react'
import './Colors.css'
import { handleChangeCtx } from '../../components/handleChangeCtx'
import Inputs from '../../components/Inputs'

const Colors = () => {

  const handleChange = useContext(handleChangeCtx)

  return (
    <div className='color-container'>
    <h1>color</h1>

    <div className='radios'>
      <input onChange={handleChange} type='radio' value='' id='color-option-1'  name='color-option'></input>
      <label htmlFor='color-option-1'>All</label>
    </div>
    <Inputs handleChange={handleChange} value='red' title='red' name='color-option' id='color-option-2'/>
    <Inputs handleChange={handleChange} value='black' title='Black' name='color-option' id='color-option-3'/>
    <Inputs handleChange={handleChange} value='blue' title='Blue' name='color-option' id='color-option-4'/>
    <Inputs handleChange={handleChange} value='green' title='Green' name='color-option' id='color-option-5'/>
    <Inputs handleChange={handleChange} value='white' title='White' name='color-option' id='color-option-6'/>
    



  </div>
  )
}

export default Colors