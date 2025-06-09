import React from 'react'
import './Category.css'
import Input from '../../Components/Input'
function Category({onChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>
        Category
      </h2>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="category" value="all" onChange={onChange} />
          <span className='checkmark'>All</span>
        </label>
        <Input onChange={onChange} value="sneakers" name="test" title="sneakers"></Input>
        <Input onChange={onChange} value="Heals" name="test" title="Heals"></Input>
        <Input onChange={onChange} value="Flats" name="test" title="Flats"></Input>
        <Input onChange={onChange} value="Sandals" name="test" title="Sandals"></Input>
      </div>
       
        
      
    </div>
  )
}
export default Category;
