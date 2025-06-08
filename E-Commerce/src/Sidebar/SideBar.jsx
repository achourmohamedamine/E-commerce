import React from 'react'
import './SideBar.css'
import Category from './Category/Category'
import Price from'./Price/Price';
import Colors from './Colors/Colors';   
export default function SideBar() {
  return (
    <section className='sidebar'>
        <div className='logo-container'>
        <h1 >🛒</h1>
        </div>
        <Category></Category>
        <Price></Price>
        <Colors></Colors>       

    </section>
  )
}

