import React from 'react'
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import './Navigation.css'

const Navigation = ({input, handleSubmit}) => {
  return (
    <nav className='nav-links'>
      <input onChange={handleSubmit} value={input} type='text' placeholder='Enter your search'></input>
      <ul className='nav-links-row'>
        <li><a href='#'><AiOutlineHeart /></a></li>
        <li><a href='#'><AiOutlineShoppingCart /></a></li>
        <li><a href='#'><AiOutlineUserAdd /></a></li>
      </ul>

    </nav>
  )
}

export default Navigation