import React from 'react'
import Input from '../../Components/Input';
import './Price.css';
function Price({onChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>
        price
      </h2>  
      <div>


        <label className='sidebar-label-container'>
          <input type="radio" name="price" value="all" onChange={onChange} />
          <span className='checkmark'>All</span>
        </label>
        <Input onChange={onChange} value="0-50" name="price" title="0-50"></Input> 
        <Input onChange={onChange} value="50-100" name="price" title="50-100"></Input>
        <Input onChange={onChange} value="100-150" name="price" title="100-150"></Input>
        <Input onChange={onChange} value="150-250" name="price" title="150-250"></Input>
        <Input onChange={onChange} value="+250" name="price" title="+250"></Input>
      </div>
      
         
        
        
        
      
      
      </div>
  )
}
export default Price;
