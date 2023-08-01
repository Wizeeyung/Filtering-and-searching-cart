import React, { useContext } from 'react'
import './Price.css'
import { handleChangeCtx } from '../../components/handleChangeCtx'
import Inputs from '../../components/Inputs'
const Price = () => {

  const handleChange = useContext(handleChangeCtx)
  return (
    <div className='price-container'>
    <h1>Price</h1>

    <div className='radios'>
      <input onChange={handleChange} type='radio' value='' id='price-option-1' name='price-option'></input>
      <label htmlFor='price-option-1'>All</label>
    </div>

    <Inputs value={50} title='$0 - $50' name='price-option'  />
    <Inputs value={100} title='$50 - $100' name='price-option'  />
    <Inputs value={150} title='$100 - $150' name='price-option'  />
    <Inputs value={200} title='Over $150' name='price-option'  />
  </div>
  )
}

export default Price