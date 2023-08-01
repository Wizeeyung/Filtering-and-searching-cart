import React from 'react'
import {useContext} from 'react'
import './Category.css'
import Inputs from '../../components/Inputs'
import { handleChangeCtx } from '../../components/handleChangeCtx'




const Category = () => {

  const handleChange = useContext(handleChangeCtx)
  

  return (
    <div className='category-container'>
      <h1>Category</h1>

      <div className='radios'>
        <input type='radio' onChange={handleChange} value='' id='option-1' name='option'></input>
        <label htmlFor='option-1'>All</label>
      </div>

      <Inputs value='sneakers' title='Sneakers' name='option' id='sneakers' />
      <Inputs value='flats' title='Flats' name='option' id='flats' />
      <Inputs value='sandals' title='Sandals' name='option' id='sandals'/>

      
    
      

    </div>
  )
}

export default Category