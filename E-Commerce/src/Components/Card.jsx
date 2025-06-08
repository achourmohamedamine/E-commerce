import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaBagShopping} from 'react-icons/fa6'
function Card() {
  return (
    <>
    
      <section className='card'>
              <img  className="card-image" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />
              <div className='card-details'>
                <h3 className='card-title'>Nike Air Monarch IV</h3>
                <section className='card-review'>
                  <AiFillStar className='star'/> <AiFillStar className='star'/> <AiFillStar className='star'/> <AiFillStar className='star'/>
                  <span className='reviews'>(123 reviews)</span>
                </section>
                <section className= 'card-price'>
                  <div className='price'> 
                     <del>300dt</del>200dt
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
