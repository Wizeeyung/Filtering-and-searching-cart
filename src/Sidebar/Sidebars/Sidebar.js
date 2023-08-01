import React, {useState} from 'react'
import './Sidebar.css'
import {GiShoppingCart} from 'react-icons/gi'
import Category from '../Category/Category'
import Price from '../Price/Price'
import Colors from '../Colors/Colors'

const Sidebar = () => {

  const [isActive, setIsActive] = useState(false)

  const handleClickChange = ()=>{
    setIsActive(!isActive)
  }
  
  return (
    <div className='sidebar-container'>
      <h1 onClick={handleClickChange} className='h1'><GiShoppingCart /></h1>
      <div className='sidebar-contents'>
        <Category  />
        <Price  />
        <Colors  />
      </div>
      {isActive ? (<div className='sidebar-content'>
        <Category  />
        <Price  />
        <Colors  />
      </div>)  : null}
      
      
      
    </div>
  )
}

export default Sidebar