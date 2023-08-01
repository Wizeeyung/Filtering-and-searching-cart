import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsCartDashFill} from 'react-icons/bs'


const Cards = ({img, title, star, reviews, prevPrice, newPrice, id}) => {

 
  return (
    <div className='product-container'>
        
        <img src={img} alt={title}/>
        
        
        <p><strong>{title}</strong></p>
        <div className='reviews'>
          <AiFillStar  className='rating-stars'/><AiFillStar className='rating-stars'/><AiFillStar className='rating-stars'/>
          <span> {reviews}</span>
        </div>
        <div className='price-cart'>
          <div className='price'>
          <p className='first-price'>{prevPrice}</p>
          <p>${newPrice}</p>
          <div className='cart'>
            <BsCartDashFill className='cart-icon' />
          </div>

          </div>
          

    
        </div>
        


      </div>
  )
}

export default Cards