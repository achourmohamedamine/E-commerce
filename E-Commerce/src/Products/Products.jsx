import React from 'react'
import './Products.css'
import {AiFillStar} from 'react-icons/ai'
import {FaBagShopping} from 'react-icons/fa6'
import Card from '../Components/Card'
function Products({finalFilteredProducts}) {
  return (
    console.log(finalFilteredProducts),
    <section className='card-container'>
      
      
      {finalFilteredProducts}

    </section>
    
  );
}
export default Products;