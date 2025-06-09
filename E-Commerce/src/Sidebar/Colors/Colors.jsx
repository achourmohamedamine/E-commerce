import React from 'react'
import Input from '../../Components/Input';
function Colors({onChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>
        Colors
      </h2>
      <div>
          <label className='sidebar-label-container'>
          <input type="radio" name="Color" value="all" onChange={onChange} />
          <span className='checkmark'>All</span>
        </label>
       <Input onChange={onChange} name="Color" value="Black" title="Black"  ></Input>
        <Input  onChange={onChange} name="Color" value="White" title="White"></Input>
        <Input  onChange={onChange} name="Color" value="Grey" title="Grey"></Input>
        <Input  onChange={onChange} name="Color" value="Red" title="Red"></Input>
      </div>
       
    </div>
  )
}
export default Colors;
