import React from 'react'
import './Recommended.css'
function Recommended() {
  return (
    <>
    <div>
      <h3 className='Recommended-title'>Recommended</h3>
      <div className='Recommended-flex'>
        <button className='btns'>All Products</button>
        <button className='btns'>Nike</button>
        <button className='btns'>Adidas</button>
        <button className='btns'>Puma</button>
        <button className='btns'>Vans</button>
      </div>
    </div>
    </>
    
  )
}
export default Recommended;