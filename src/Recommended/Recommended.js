import React, {useContext} from 'react'

import './Recommended.css'
import { handleClickCtx } from '../components/handleClickCtx'
import Button from '../components/Button'

const Recommended = () => {

  

  const handleClick = useContext(handleClickCtx)

  return (
    <div className='recommended-container'>
      
      <h1>Recommended</h1>
        <div className='icons'>
          <button onClick={handleClick} >All Products</button>
          <Button value='Nike' company='Nike'/>
          <Button value='Vans' company='Vans' />
          <Button value='Puma' company='Puma' />
          <Button value='Adidas' company='Adidas'/> 
        </div>
     

    </div>
  )
}

export default Recommended