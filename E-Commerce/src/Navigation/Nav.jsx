import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'
import './Nav.css'
export default function Nav() {
  return (
    <nav>
      <div className='nav-contaainer'>
         <input type="text" placeholder='Enter your Search' className='search-items' />
      </div>
      <div className='profile-container'>
        <a href="#">
          <FiHeart className='nav-icons'></FiHeart>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons"></AiOutlineShoppingCart>
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons'></AiOutlineUserAdd>
        </a>
      </div>
    </nav>
  )
}
