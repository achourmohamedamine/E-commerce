import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaBagShopping} from 'react-icons/fa6'
function Card({img, title, star, reviews, prevPrice, newPrice, company, color, category}) {
  return (
    <>
    
      <section className='card'>
              <img  className="card-image" src={img} alt={title} />
              <div className='card-details'>
                <h3 className='card-title'>{title}</h3>
                <section className='card-review'>
                  {star} {star}  {star}  {star}
                  <span className='reviews'>{reviews}</span>
                </section>
                <section className= 'card-price'>
                  <div className='price'> 
                     <del>{prevPrice}</del>{newPrice}
                  </div>
                  
                
                <div className='card-bag'>
                  <FaBagShopping className='bag'/>
                </div>
                </section>
              </div>
            </section>
    </>
    
  )
}
export default Card;
