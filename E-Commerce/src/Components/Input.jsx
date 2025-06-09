import React from 'react'

function Input({onChange , value,name,title,color}) {
  return (
    
         <label className='sidebar-label-container'>
          <input type="radio" name={name} value={value} onChange={onChange} />
          <span className='checkmark'  style={{backgroundColor:color}}>{title}</span>
        </label>
    
    
    
  )
}
export default Input;
